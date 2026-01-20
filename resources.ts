import { Resource, tables, server, logger } from 'harperdb';

interface UserData {
  username: string;
  password: string;
}

export class SignIn extends Resource {
  static loadAsInstance = false; // enable the updated API

  async post(target: string, data: UserData) {
    logger.notify('User login attempt', data);
    const context = this.getContext();

    try {
      await context.login(data.username, data.password);
      logger.notify('User logged in successfully', context.user.username);
    }
    catch (error) {
      logger.error('Login failed', error);
      throw new Error('Login failed');
    }
  }
}

export class SignUp extends Resource {
  static loadAsInstance = false; // enable the updated API

  async post(target, data: UserData) {
    logger.notify('User sign-up attempt', data.username);
    const context = this.getContext();

    try {
      await createUser(crypto.randomUUID(), data, context);
    } catch (error) {
      logger.error('Sign-up failed', error);
      throw new Error('Sign-up failed');
    }
  }
}

export class UserResource extends Resource {
  static loadAsInstance = false; // enable the updated API

  async get(target) {
    const context = this.getContext();
    logger.notify('User retrieval attempt', target.id);
    if (!context.user || target.id !== context.user.username) {
      throw new Error('User not found');
    }
    try {
      const user = await tables.User.get(
        JSON.stringify({
          conditions: [
            { attribute: 'username', comparator: 'equals', value: context.user.username },
          ],
          limit: 300,
        }));
      return user;
    } catch (error) {
      logger.error('User retrieval failed', error);
      throw new Error('User retrieval failed');
    }
  }
}

export class InvoicesListResource extends Resource {
  static loadAsInstance = false; // enable the updated API

  async get() {
    const context = this.getContext();
    // logger.notify('Invoice retrieval attempt', context);
    try {
      const invoices = await tables.Invoice.search(
        JSON.stringify({
          select: [
            'username',
            'id',
            'userId',
            'dueDate',
            'sentDate',
            'status',
            'subtotal',
            'tax',
            'total'
          ],
          conditions: [
            { attribute: 'username', comparator: 'equals', value: context.user.username },
            // { attribute: 'userId', comparator: 'equals', value: context.user.id },
          ],
          limit: 300,
        }));
      return invoices;
    } catch (error) {
      logger.error('Invoice list retrieval failed', error);
      throw new Error('Invoice list retrieval failed');
    }
  }
}

export class InvoiceResource extends Resource {
  static loadAsInstance = false; // enable the updated API

  async get(target) {
    const context = this.getContext();
    // logger.notify('Invoice retrieval attempt', context.user.username);
    logger.notify('Invoice retrieval attempt', target.id);
    try {
      const invoiceDetails = await tables.Invoice.get(
        JSON.stringify({
          // select: [
          //   'id',
          //   'userId',
          //   'dueDate',
          //   'sentDate',
          //   'status',
          //   'subtotal',
          //   'tax',
          //   'total'
          // ],
          conditions: [
            { attribute: 'id', comparator: 'equals', value: target.id },
            // { attribute: 'username', comparator: 'equals', value: context.user.username },
          ],
          limit: 300,
        }));
      logger.notify('Invoice details retrieval successful', invoiceDetails);
      return invoiceDetails;
    } catch (error) {
      logger.error('Invoice details retrieval failed', error);
      throw new Error('Invoice details retrieval failed');
    }
  }

  async post(target: string, data: Object) {
    logger.notify('Invoice creation attempt', data);
    const context = this.getContext();

    try {
      await createInvoice(data, context);
    } catch (error) {
      logger.error('Invoice creation failed', error);
      throw new Error('Invoice creation failed');
    }
  }

  async put(target: string, data: Object) {
    logger.notify('Invoice update attempt', data);
    const context = this.getContext();

    try {
      await tables.Invoice.update(target, data);
    } catch (error) {
      logger.error('Invoice update failed', error);
      throw new Error('Invoice update failed');
    }
  }

  async delete(target: string) {
    logger.notify('Invoice deletion attempt', target);
    const context = this.getContext();

    try {
      await tables.Invoice.delete(target);
    } catch (error) {
      logger.error('Invoice deletion failed', error);
      throw new Error('Invoice deletion failed');
    }
  }
}


// Auth Helper functions
async function createUser(userId: string, userData: { username: string; password: string }, context: any) {
  const { username, password } = userData;

  logger.debug('Creating new user', { userId, username });

  // Create Harper system user
  await server.operation({
    operation: 'add_user',
    username: userId,
    password,
    role: 'least_privileged',
    active: true,
  }, context);

  // Create user record
  //NOTE: "tables"  is a global variable provided by HarperDB. We should look into better ways to handle this in the future and create types
  const user = await tables.User.create(
    {
      id: userId,
      username,
      createdAt: new Date().toISOString(),
      acceptedTermsAndConditionsDate: new Date().toISOString(),
    },
    context
  );

  logger.debug('Successfully created new user', { userId });

  return user;
}


// Invoice Helper functions
async function createInvoice(invoiceData: Object, context: any) {
  const { ...invoice } = invoiceData;

  logger.debug('Creating new invoice', { invoice });

  // Create invoice record
  const invoiceResponse = await tables.Invoice.create(
    {
      username: context.user.username,
      ...invoice,
    },
    context
  );

  logger.debug('Successfully created new invoice', { invoiceResponse });

  return invoiceResponse;
}

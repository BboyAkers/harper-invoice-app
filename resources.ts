import { Resource, tables, server, logger, } from 'harperdb';

interface UserData {
  username: string;
  password: string;
}

export class SignIn extends Resource {
  static loadAsInstance = false; // enable the updated API

  async post(target:string, data: UserData) {
    logger.notify('User login attempt', data);
    const context = this.getContext();

    try {
      await context.login(data.username, data.password);
      logger.notify('User logged in successfully', data.username);
    }
    catch (error) {
      logger.error('Login failed', error);
      throw new Error('Login failed');
    }
  }
}

export class SignUp extends Resource {
  static loadAsInstance = false; // enable the updated API

  async post(target:string, data: UserData) {
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

export class InvoiceResource extends Resource {
  static loadAsInstance = false; // enable the updated API

  async get(target:string) {
    logger.notify('Invoice retrieval attempt', target);
    const context = this.getContext();

    try {
      const invoice = await tables.Invoice.get(target);
      return invoice;
    } catch (error) {
      logger.error('Invoice retrieval failed', error);
      throw new Error('Invoice retrieval failed');
    }
  }

  async post(target:string, data: Object) {
    logger.notify('Invoice creation attempt', data);
    const context = this.getContext();

    try {
      await createInvoice(data, context);
    } catch (error) {
      logger.error('Invoice creation failed', error);
      throw new Error('Invoice creation failed');
    }
  }

  async put(target:string, data: Object) {
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
  const { id, ...invoice } = invoiceData;

  logger.debug('Creating new invoice', { id });

  // Create invoice record
  const invoiceResponse = await tables.Invoice.create(
    {
      id: id,
      ...invoice,
    },
    context
  );

  logger.debug('Successfully created new invoice', { id });

  return invoiceResponse;
}

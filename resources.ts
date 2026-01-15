import { Resource, tables, server, logger } from 'harperdb';

interface UserData {
  username: string;
  password: string;
}

export class SignIn extends Resource {
  static loadAsInstance = false; // enable the updated API

  async post(target, data: UserData) {
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


export class Login extends Resource {
  static loadAsInstance = false; // enable the updated API

  async post(data) {
    logger.notify('User login attempt', data.username);
    const context = this.getContext();
    return context;
  }

  get() {
    return 'hello from login resource';
  }
}

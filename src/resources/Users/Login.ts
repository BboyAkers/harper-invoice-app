const { User } = tables

export class Login extends Resource {
  	static loadAsInstance = false; // enable the updated API

    async post(data) {
      logger.notify('User login attempt', data.username);
      for await (const record of User.search({ username: data.username })) {
        if(record) {
          console.log('User found:', record.username);
        }
      }
    }
    
}

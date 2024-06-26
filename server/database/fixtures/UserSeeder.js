const AbstractSeeder = require("./AbstractSeeder");

class UserSeeder extends AbstractSeeder{
    constructor() {

        super({table:"user", truncate:true}); 
    }

    run(){

        for(let i=0; i<10; i +=1){

            const fakeUser={
               firstname: this.faker.person.firstName(),
               lastname: this.faker.person.lastName(),
               email: this.faker.internet.email(),
               password: this.faker.internet.password(),
/*                role_id: this.faker.number.int({min:1, max:2}), */
            };
            this.insert(fakeUser);
        }
    }

}

module.exports = UserSeeder;
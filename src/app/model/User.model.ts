export class User {
   
       constructor(
              private _username: string,
              private _email: string,
              private _password: string,
              
          ) {}
      

          public get password(): string {
              return this._password;
          }
          public set password(value: string) {
              this._password = value;
          }
          public get email(): string {
              return this._email;
          }
          public set email(value: string) {
              this._email = value;
          }
          
      
          public get username(): string {
              return this._username;
          }
          public set username(value: string) {
              this._username = value;
          }
      
          public toJSON(): object {
              return {
                  
                  name: this._username,
                  email: this._email,
                  password: this._password,
                
              };
          }

}
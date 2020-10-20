export class User implements IUser {
    uname : string
    email :string

    constructor(uname :string, email:string){
        this.uname = uname;
        this.email=email;
    }

}

export interface IUser{
    uname:string
    email:string
}


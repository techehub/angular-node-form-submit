import { Component } from '@angular/core';
import { IUser, User } from './user';
import { UserService } from './user.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  //uname : string  = "vijeesh"
  //email : string = "vijutp@gmail.com"

  user:IUser = new User('aaaaa', 'bbbb')

  constructor(private service: UserService ){}

  createuser(){
    console.log ("inside create user")
    this.service.createUser(this.user).subscribe ((res)=>{
      console.log (res)
    })
  }

  getuser(){
    this.service.getUsers().subscribe ((res)=>{
      
    console.log ("username- ",res.uname)
    console.log ("username- ",res.email)
    this.user=res

    })
  }

}

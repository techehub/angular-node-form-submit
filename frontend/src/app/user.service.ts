import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { IUser, User } from './user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor( private httpClient : HttpClient) { }

  createUser (user:IUser){
    console.log ('inside create user service')
    return this.httpClient.post ('http://localhost:8080/service/user',
    user
     )
  }

  updateUser (user:IUser){
    console.log ('inside create user service')
    return this.httpClient.put ('http://localhost:8080/service/user/iduser',
    user
     )
  }

  getUsers ()  {
    return this.httpClient.get <IUser> ('http://localhost:8080/service/user/')
  }

  getUserById (id){
    return this.httpClient.get <IUser> ('http://localhost:8080/service/user/'+id)
  }

  deleteUser (id){
    return this.httpClient.delete  ('http://localhost:8080/service/user/'+id)
  }
}

import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

    constructor(private hc:HttpClient) { }

    login(data:User){
        // username password
        return this.hc.get("http://localhost:3000/users?username"+data.username+"&password="+data.password)

    }
}
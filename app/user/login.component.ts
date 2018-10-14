import { Router } from '@angular/router';
import { UserService } from './user.service';
import { User } from './user';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {

    u1:User = new User();

    constructor(private us:UserService,private router:Router) { }

    ngOnInit() { }

    login(){
        this.us.login(this.u1).subscribe((data)=>{
            var users = <User[]>data;
            if(users.length==1){
                alert("success");
                var currentUser = users[0];
                localStorage.setItem("username",currentUser.username);
                localStorage.setItem("userrole",currentUser.role);
                localStorage.setItem("userdf",currentUser.dateFormat);
                this.router.navigate(["/home"]);
            }
            else
                alert("please provide valid username / password");
        })
    }
}
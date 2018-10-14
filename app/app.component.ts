import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
    constructor(private router:Router) { }

    ngOnInit() { }

    logout(){
        localStorage.clear();
        this.router.navigate(["/login"]);
    }
}
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class SecurityGuard implements CanActivate {
    constructor() { }

    canActivate() {

        var currentUserName = localStorage.getItem("username");

        if(currentUserName)
            return true;

        return false;
    }
}
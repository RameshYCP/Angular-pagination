import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AutzGuard implements CanActivate {
    constructor() { }

    canActivate() {

        var currentUserRole = localStorage.getItem("userrole");

        if(currentUserRole)
            if(currentUserRole=="admin")
                return true;

        return false;
    }
}
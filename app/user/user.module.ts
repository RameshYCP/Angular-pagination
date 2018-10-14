import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

var userRoutes = [
    {path:"login",component:LoginComponent}
]

@NgModule({
    imports: [CommonModule,HttpClientModule,FormsModule,RouterModule.forChild(userRoutes)],
    declarations:[LoginComponent],
    providers:[UserService]    
})
export class UserModule { }

import { UserModule } from './user/user.module';
import { StudentModule } from './student/student.module';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';

var mainRoutes = [
    {path:"home",component:HomeComponent},
    {path:"contact",component:ContactComponent},
    {path:"about",component:AboutComponent},
    {path:"",component:HomeComponent},
]


@NgModule({
    imports: [BrowserModule,StudentModule,UserModule,RouterModule.forRoot(mainRoutes),RouterModule],
    declarations: [AppComponent,HomeComponent,ContactComponent,AboutComponent],
    bootstrap: [AppComponent],
})
export class AppModule { }

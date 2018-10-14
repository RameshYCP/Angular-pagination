import { AutzGuard } from './../shared/autz.guard';
import { SecurityGuard } from './../shared/security.guard';
import { StudentFormComponent } from './student-form.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './student.service';
import { StudentListComponent } from './student-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
var studentRoutes = [
    {path:"studentList",component:StudentListComponent,canActivate:[SecurityGuard]},
    {path:"studentForm",component:StudentFormComponent,canActivate:[SecurityGuard,AutzGuard]}
]

@NgModule({
    imports: [CommonModule,HttpClientModule,FormsModule,RouterModule.forChild(studentRoutes)],
    declarations:[StudentListComponent,StudentFormComponent],
    providers:[StudentService,SecurityGuard,AutzGuard]
})
export class StudentModule { }

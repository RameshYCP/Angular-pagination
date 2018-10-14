import { StudentService } from './student.service';
import { Student } from './student';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
@Component({
    selector: 'student-list',
    templateUrl: 'student-list.component.html'
})

export class StudentListComponent implements OnInit {
    students:Observable<Student[]>;
    start:number  = 0;
    end:number = 1;
    currentDate:Date = new Date();
    dateFormat:string = "dd/MM/yyyy";
    constructor(private ss:StudentService) {
        this.dateFormat = localStorage.getItem("userdf");
        this.students=this.ss.getAllStudents();
     }

    ngOnInit() { }

    m1(){
        this.start = this.start -1;
        this.end = this.end -1;
    }

    m2(){
        this.start = this.start +1;
        this.end = this.end +1;
    }
}
import { Router } from '@angular/router';
import { StudentService } from './student.service';
import { Student } from './student';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student-form',
    templateUrl: 'student-form.component.html'
})

export class StudentFormComponent implements OnInit {
    
    s1:Student = new Student();

    constructor(private ss:StudentService,private router:Router) { }

    ngOnInit() { }

    save(){
        this.ss.insertStudent(this.s1).subscribe((data)=>{
            alert("success");
            this.router.navigate(['/studentList']);
        })
    }
}
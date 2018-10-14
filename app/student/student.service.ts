import { Observable } from 'rxjs';
import { Student } from './student';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable()
export class StudentService {

    constructor(private hc:HttpClient) { }

    getAllStudents(){
        return <Observable<Student[]>>this.hc.get("http://localhost:3000/students/");
    }
    getStudentById(id:number){
        return this.hc.get("http://localhost:3000/students/"+id);
    }

    insertStudent(data:Student){
        return this.hc.post("http://localhost:3000/students/",data);
    }

    updateStudent(data:Student){
        return this.hc.put("http://localhost:3000/students/"+data.id,data);
    }
    deleteStudent(id:number){
        return this.hc.delete("http://localhost:3000/students/"+id);
    }
}
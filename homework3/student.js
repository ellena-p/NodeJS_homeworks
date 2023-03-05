import {EventEmitter} from "events";
import { v4 as uuidv4 } from 'uuid';
import fs from "fs";
const event = new EventEmitter();

event.on('greet', (fullName)=>{
    fs.appendFileSync("greeting_log.txt", `${fullName}\n`)
    console.log (`Hello ${fullName}!`)
})

export let arrayWithStudents =[];
export class Student {
    constructor(studentFullname, studentEmail, studentPassword){
        this.studentFullname = studentFullname;
        this.studentEmail = studentEmail;
        this.studentPassword = studentPassword
        this.id = uuidv4();
        this.event = event.emit ('greet',this.studentFullname);
    }
    saveStudent (){

        let newStudentInput = this;
        arrayWithStudents.push(newStudentInput);
    }
}

export const allStudents = (path, array)=>{
    fs.appendFileSync(path,JSON.stringify(array, null, 2))
    
}


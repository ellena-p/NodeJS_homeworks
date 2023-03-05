import { Student, allStudents, arrayWithStudents } from "./student.js";

const student1 = new Student("Elena Popova", "elenapendevska@hotmail.com", "hdhdksf25");
const student2 = new Student ("Petko Petkov","petkopetkov@gmail.com","fwerfr33");
const student3 = new Student("Trajko Trajkov", "trajkotrajkov@gmail.com","55rgerg")
student1.saveStudent();
student2.saveStudent();
student3.saveStudent();
allStudents("students.json",arrayWithStudents);

const fs = require("fs");
const path = require("path");

fs.writeFileSync("homework.txt","");

let pathSave = path.join(__dirname, "homework.txt");

fs.writeFileSync (pathSave, "Homework 02 in Basic Node");

fs.appendFileSync(pathSave, "\nFINISHED!");

let readFile = fs.readFileSync (pathSave, {encoding: "utf-8"});

console.log (readFile);
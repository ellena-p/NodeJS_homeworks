import http from "http";
import fileService from "./file-service.js";

const theServer = http.createServer((request, response) =>{

    const url = request.url;
    const method = request.method;

    if(url === "/"){
        response.setHeader("Content-Type", "text/html");
        response.write("<h1>This content should be the response!</h1>");
        response.end();
    };

    if(url === "/student" && method === "GET"){
    
        response.setHeader("Content-Type", "application/json");
        const theStudent = fileService.readFile("./student.json");
        response.write(JSON.stringify(theStudent));
        response.end();
    };
})

theServer.listen(3000, () => {
    console.log("Server running...")
})
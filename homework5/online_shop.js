import express from "express";
import router from "./routes.js";

const shopApp = express();
shopApp.use((request, response, next) => {
    let time = new Date().toLocaleTimeString();
    console.log(`Request on the route /products was made at ${time}`);
    
    next(); 
})
shopApp.use(express.json());

shopApp.use(router);

shopApp.get("/", (request, response) => {
    response.send("<h1>Online-shop application</h1>")
})

shopApp.use(router);
shopApp.listen(3000, () => {
    console.log("Server is up and running...");
});

import express from "express";
import blogRouter from "./routes/blog.routes.js";
import routerAuth from "./routes/auth.route.js";

const blogServer = express();


blogServer.use(express.json());
blogServer.use(routerAuth)
blogServer.use("/blogs", blogRouter);

blogServer.listen(3000, ()=>{
    console.log("Server is up and running")
})
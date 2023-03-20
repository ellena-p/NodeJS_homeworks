import express from "express";
import blogRouter from "./routes/blog.routes.js";

const blogServer = express();

blogServer.use(express.json());
blogServer.use("/blogs", blogRouter);

blogServer.listen(3000, ()=>{
    console.log("Server is up and running")
})
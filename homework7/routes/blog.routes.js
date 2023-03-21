import express from "express";
import session from "express-session";
import BlogController from "../controllers/blog.controller.js";
import { authSession } from "../sessions/auth.session.js";
const blogsController = new BlogController();
const blogRouter = express.Router();

blogRouter.get("/", async (req, res) => {
  const allBlogs = await blogsController.showBlogs();
 
  res.send(allBlogs);
});

blogRouter.post("/", authSession,async (req, res) => {
  const body = req.body;
  const theSession = req.session;
  
  await blogsController.newBlog(
    body.title,
    body.body,
    body.author,
    body.tags
  );
  if (theSession.user !==undefined && theSession.user.isLoggedIn){
    res.status(201).send ({message:"The blog post has been created"})
  }
  else{
    res.status(401).send ({message:"You have to log in to create a new post"})
  }
  
});

blogRouter.patch("/:id",async (req, res) => {
    const body = req.body;
    const requestedId = req.params.id;
    
    blogsController.editBlog(requestedId, body.title, body.body, body.tags)
    
    res.send ({message:`The blog post with ID ${requestedId} has been edited`})
} )

blogRouter.delete ("/:id", async(req, res)=>{
    const requestedId = req.params.id;
    try {
        await blogsController.deleteBlog(requestedId);
        res.send(`Blog with id ${requestedId} has been deleted`);
    }catch (error){
        res.status(404).send({message:error.message})
    }
})

blogRouter.get("/query", async(req, res)=>{
    const queryParams = req.query.tag;
    const filteredByTag = await blogsController.filterByQuery(queryParams);
   
    res.send(filteredByTag)
})
export default blogRouter;

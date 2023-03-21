import BlogModel from "../models/blog.models.js";

const blogModel = new BlogModel();

class BlogController{
    async showBlogs(){
        const allBlogs = await blogModel.showAllBlogs();

        return allBlogs;
    }

    async newBlog(title, body, author, tags){
        const newBlog = await blogModel.createBlog(title, body, author, tags);
    }
    
    async editBlog (id, title,body,tags){
        const editedBlog = await blogModel.editBlog(id, title,body,tags);
    }

    async deleteBlog (id){
        const deleteBlog = await blogModel.deleteBlog(id);
    }
    
    async filterByQuery(query){
        const filterQuery =await blogModel.filterByTag(query);
        return filterQuery;
    }
}

export default BlogController;
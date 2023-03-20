import fileService from "../file-service/file.service.js";
import { Blog } from "../entities/blog.entity.js";
import path from "path";

class BlogModel {
    thePath = path.join(".", "db", "blogs.json");

    async showAllBlogs() {
        const allBlogs = await fileService.readFile(this.thePath);

        return allBlogs;
    }

    async createBlog(title, body, author, date, tags) {
        const allBlogs = await fileService.readFile(this.thePath);
        const blog = new Blog(title, body, author, date, tags);

        allBlogs.push(blog);

        await fileService.writeFile(
            this.thePath,
            JSON.stringify(allBlogs, null, 2)
        );
    }

    async editBlog(id, title, body, tags) {
        const allBlogs = await fileService.readFile(this.thePath);
        const editedBlogs = allBlogs.map((blog) => {
            if (blog.id === id) {
                blog.title = title || blog.title;
                blog.body = body || blog.body;
                blog.tags = tags || blog.tags;
                return blog;
            }
            return blog;
        });

        await fileService.writeFile(
            this.thePath,
            JSON.stringify(editedBlogs, null, 2)
        );
    }
    
    async deleteBlog(id){
        const allBlogs = await fileService.readFile(this.thePath);
        const blogsFilter = allBlogs.filter((blog)=>blog.id !=id);
        if(blogsFilter.length === allBlogs.length){
            throw new Error(`The post does not exist`)
        }

        await fileService.writeFile(
            this.thePath,
            JSON.stringify(blogsFilter, null, 2)
        );
        
    }   

    async filterByTag(query){
        const allBlogs = await fileService.readFile(this.thePath);
        const filteredBlogs= allBlogs.filter((blog) => blog.tags.includes(query));
        
        return filteredBlogs
               
    }
}

export default BlogModel;

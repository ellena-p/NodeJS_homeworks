import{v4 as uuidV4} from "uuid";

export class Blog{
    constructor (title, body, author, tags){
        this.id =uuidV4();
        this.title = title;
        this.body = body;
        this.author = author;
        this.date = new Date().toLocaleDateString();
        this.tags = tags;
        
    }
}
import express, { request, response } from "express";
import { getAllProducts, addNewProduct, removeAllProducts, findById, editById ,removeById} from "./operations.js";


const router = express.Router();
const thePath = "products.json";


//Get all products
router.get ("/products",(request, response) =>{
    const read = getAllProducts(thePath);
    response.send (read);
})

//Add new product
router.post("/products", (request, response) => {
    const body = request.body;
    addNewProduct(thePath, body.name, body.price, body.rating, body.description, body.category,body.isInStock);
    response.send ({message: "New product has been added"});
})

//Delete all products
router.delete("/products", (request, response) => {
    removeAllProducts(thePath);
    response.send ({message: "All products are deleted"});
})

//Get product by ID
router.get("/products/:id", (request, response) => {
    const requestedId = request.params.id;
    const foundId = findById(thePath, requestedId);
    if (foundId === undefined) {
        return response.status(404).send({ message: `Product with id: ${requestedId} was not found` });
    }
    else {
        return response.send(foundId);
    };
});

//Edit a product by ID
router.put("/products/:id",(request,response) =>{
    const body = request.body;
    const requestedId = request.params.id;
    const foundProduct = editById(thePath, requestedId,body.name, body.price, body.rating,body.description, body.category, body.isInStock);
    response.send(`Product with id ${requestedId} was edited.`);
});

//Delete a product by ID
router.delete("/products/:id",(request,response) =>{
    const requestedId = request.params.id;
    removeById(thePath, requestedId);
    response.send(`Product with id ${requestedId} was deleted.`);
})
export default router;


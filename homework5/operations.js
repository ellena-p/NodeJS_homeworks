import fileservice from "./file_service.js";
import { v4 as uuidv4 } from 'uuid';

export const getAllProducts = (path) => {
    const allProducts = fileservice.readFile(path);
    return allProducts;
}

export const addNewProduct = (path, productName, productPrice, productRating, productDescription, productCategory, isProductInStock) => {
    const newProduct = {
        id: uuidv4(),
        name: productName,
        price: productPrice,
        rating: productRating,
        description: productDescription,
        category: productCategory,
        isInStock: isProductInStock
    };
    const products = fileservice.readFile(path);
    products.push(newProduct);
    fileservice.writeFile(path, JSON.stringify(products, null, 2));
}

export const removeAllProducts = (path) => {
    fileservice.writeFile(path, "");
}

export const findById = (path, id) => {
    const products = fileservice.readFile(path);
    const foundId = products.find((product) => product.id === id);
    return foundId;
}

export const editById = (path,id, name, price,rating,description, category, isInStock) => {
    const products = fileservice.readFile(path);
    const editProduct = products.map((product) => {
        if(product.id === id){
            product.name = name || product.name;
            product.price = price || product.price;
            product.rating = rating || product.rating;
            product.description = description || product.description;
            product.category = category || product.category;
            product.isInStock = isInStock || product.isInStock;
            return product;
        }
        return product;
    })
    fileservice.writeFile(path, JSON.stringify(editProduct, null, 2));
    return editProduct;
}

export const removeById = (path,id) =>{
    const products = fileservice.readFile(path);
    const deleteProduct = products.map((product) => {
        if (product.id===id){
            product ={};
            return product;
        }
        return product;
    })
    fileservice.writeFile(path, JSON.stringify(deleteProduct, null, 2));
    return deleteProduct;
}


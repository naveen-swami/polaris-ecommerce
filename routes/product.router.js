const express = require("express");
const {getAllProducts, getProductById, createProduct, updateProduct, deleteProdut} = require('../controllers/product.controller')
const { check } = require('express-validator')
const auth = require("../middleware/auth");

let productRouter = express.Router();

productRouter.get("/",auth, getAllProducts)

productRouter.get("/:id",getProductById)

productRouter.post("/",[
    check('id').not().notEmpty(),
    check('name').isLength({min:5})
],createProduct)

productRouter.patch("/:id",updateProduct)

productRouter.delete("/:id",deleteProdut)

module.exports = productRouter;
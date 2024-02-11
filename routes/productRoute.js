import express from 'express'
import{isAdmin, requireSignIN} from '../middleware/authMiddleware.js'
import { createProductController, deleteProductController, getProductController, getSingleProductController, productPhotoController, updateProductController } from '../controllers/productController.js'
import formidable from 'express-formidable'

const router = express.Router()
//routes
router.post('/create-product', requireSignIN, isAdmin, formidable(), createProductController)

//routes
router.put(
    "/update-product/:pid",
    requireSignIN,
    isAdmin,
    formidable(),
    updateProductController
  );

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete rproduct
router.delete("/delete-product/:pid", deleteProductController);

export default router
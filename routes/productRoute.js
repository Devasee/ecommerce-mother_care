import express from 'express';
import { isAdmin, requireSignIN } from '../middleware/authMiddleware.js';
import { braintreePaymentController, braintreeTokenController, createProductController, deleteProductController, getProductController, getSingleProductController, productCategoryController, productCountController, productFiltersController, productListController, productPhotoController, relatedProductController, searchProductController, updateProductController } from '../controllers/productController.js';
import formidable from 'express-formidable';

const router = express.Router();

// Create Product
router.post('/create-product', requireSignIN, isAdmin, formidable(), createProductController);

// Update Product
router.put('/update-product/:pid', requireSignIN, isAdmin, formidable(), updateProductController);

// Get All Products
router.get('/get-product', getProductController);

// Get Single Product
router.get('/get-product/:slug', getSingleProductController);

// Get Product Photo
router.get('/product-photo/:pid', productPhotoController);

// Delete Product
router.delete('/delete-product/:pid', requireSignIN, isAdmin, deleteProductController);

//filter product
router.post('/product-filters', productFiltersController);

//product count
router.get('/product-count', productCountController);

//product per page
router.get('/product-list/:page', productListController);

//search for the product
router.get('/search/:keyword', searchProductController)

//similar product
router.get('/related-product/:pid/:cid', relatedProductController);

//category wise product
router.get('/product-category/:slug', productCategoryController);

//payments route
//token
router.get('/braintree/token', braintreeTokenController);

//payments
router.post('/braintree/payment', requireSignIN, braintreePaymentController);

export default router;

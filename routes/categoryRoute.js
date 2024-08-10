import express from 'express'
import { isAdmin, requireSignIN } from "./../middleware/authMiddleware.js";
import { categoryController, createCategoryController, deleteCategoryCOntroller, singleCategoryController, updateCategoryController } from '../controllers/categoryController.js';

const router = express.Router()

//routes
//create-category
router.post('/create-category', requireSignIN, isAdmin, createCategoryController)

//update category
router.put("/update-category/:id",requireSignIN,isAdmin,updateCategoryController)

//get all category
router.get('/get-category', categoryController)

//get single category
router.get('/single-category/:id', singleCategoryController)

//delete category
router.delete('/delete-category/:id', requireSignIN, isAdmin, deleteCategoryCOntroller)

export default router;
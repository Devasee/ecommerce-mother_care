import express from 'express'
import {registerController,
    loginController,
    testController,
    forgotPasswordController,
    updateProfileController,
    orderStatusController,
    getAllOrdersController,
    getOrdersController} from '../controllers/authController.js'
    import { isAdmin, requireSignIN } from '../middleware/authMiddleware.js';
//router object
const router = express.Router()

//router
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//Forgot password || POST
router.post('/forgot-password', forgotPasswordController)

//test
router.get('/test', requireSignIN, isAdmin, testController);

//protected User route auth
router.get("/user-auth", requireSignIN, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected Admin route auth
router.get("/admin-auth", requireSignIN, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put('/profile', requireSignIN, updateProfileController)


//orders
router.get('/orders', requireSignIN, getOrdersController);

//all orders
router.get('/all-orders', requireSignIN, isAdmin, getAllOrdersController);

//order status update
router.put("/order-status/;orderId",requireSignIN, isAdmin, orderStatusController);

export default router;

// import express from 'express'
// import {registerController,
//     loginController,
//     testController,
//     forgotPasswordController} from '../controllers/authController.js'
//     import { isAdmin, requireSignIN } from '../middleware/authMiddleware.js';
// //router object
// const router = express.Router()

// //router
// //REGISTER || METHOD POST
// router.post("/register", registerController);

// //LOGIN || POST
// router.post("/login", loginController);

// //Forgot password || POST
// router.post('/forgot-password', forgotPasswordController)

// //test
// router.get('/test', requireSignIN, isAdmin, testController);

// //protected User route auth
// router.get("/user-auth", requireSignIN, (req, res) => {
//   res.status(200).send({ ok: true });
// });

// //protected Admin route auth
// router.get("/admin-auth", requireSignIN, isAdmin, (req, res) => {
//   res.status(200).send({ ok: true });
// });

// export default router;
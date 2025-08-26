const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const {fetchuser,addtocart, removeproduct, getcart}=require('../controllers/cart')
const { addProduct } = require('../controllers/product');
const { uploadImage } = require('../controllers/uploadController');
const deleteproduct = require('../controllers/deleteproduct');
const {newCollection,getproduct, popularInWomen} = require('../controllers/getproduct');
const { signup, login } = require('../controllers/userRegister');




// Multer storage setup
const storage = multer.diskStorage({
  destination: './uploads/images',
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  },
});
const upload = multer({ storage });

// All routes
router.post('/upload', upload.single('product'), uploadImage);
router.post('/addproduct', addProduct);
router.delete('/delete',deleteproduct)
router.get('/getproducts',getproduct)
router.post('/register',signup)
router.post('/login',login)
router.get('/new-collection',newCollection)
router.get('/popular-in-women',popularInWomen)
router.post('/addtocart',fetchuser,addtocart)
router.delete('/removecart',fetchuser,removeproduct)
router.post('/getcart',fetchuser,getcart)
module.exports = router;

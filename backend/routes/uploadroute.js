const express = require('express');
const multer = require('multer');
const path = require('path');
const { uploadImage } = require('../controllers/uploadController');

const router = express.Router();

// Set up Multer Storage
const storage = multer.diskStorage({
  destination: './uploads/images',
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({ storage });

// Image upload route
router.post('/upload', upload.single('product'),uploadImage);

module.exports = router;

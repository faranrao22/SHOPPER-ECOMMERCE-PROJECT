const Product = require('../models/productmodel');

const addProduct = async (req, res) => {
  let products=await Product.find({})
  let id
  if(products.length>0)
  {
    let last_product_array=products.slice(-1)
    let last_product=last_product_array[0]
    id=last_product.id+1
  }
  else{
    id=1
  }
  try {
    const product = new Product({
      id:id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    });

    await product.save();
    console.log("Product saved");
    res.status(201).json({ success: true, message: 'Product added successfully', product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error adding product' });
  }
};

module.exports = { addProduct };

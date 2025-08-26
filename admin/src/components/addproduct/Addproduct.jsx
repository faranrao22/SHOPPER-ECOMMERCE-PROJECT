import React, { useState } from 'react';
import upload_area from '../../assets/upload_area.svg';
import axios from 'axios'

function Addproduct() {
    let [image ,setImage]=useState(false)
    let [productdetail,setproductdetail]=useState({
        name:"",
        image:"",
        category:"women",
        new_price:"",
        old_price:""
    })
    let imagehandler=(e)=>{
        setImage(e.target.files[0])

    }
    let changehandler=(e)=>{
        setproductdetail({...productdetail,[e.target.name]:e.target.value})
    }
  let addproduct = async () => {
  console.log(productdetail);
  let responseData;
  let product = productdetail;
  let formData = new FormData();
  formData.append('product', image);

  await fetch('http://localhost:4000/api/upload', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      responseData = data;
    });

  if (responseData.success) {
    product.image = responseData.image_url;
    console.log("Final Product with uploaded image:", product);

    await fetch('http://localhost:4000/api/addproduct', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.success) {
          alert("Product added");
          setproductdetail({
            name: "",
            image: "",
            category: "women",
            new_price: "",
            old_price: ""
          });
          setImage(false);
        } else {
          alert("Failed");
        }
      });
  } else {
    alert("Image upload failed");
  }
};



  return (
    <div className="w-full max-w-[800px] py-8 px-10 my-5 mx-auto rounded-md bg-white shadow-md space-y-6">
      {/* Product Title */}
      <div className="text-gray-600 text-sm">
        <p className="mb-1">Product Title</p>
        <input
          className="w-full h-12 rounded px-4 border border-gray-300 outline-none text-sm"
          onChange={changehandler}
          value={productdetail.name}
          type="text"
          name="name"
          placeholder="Type here"
        />
      </div>

      {/* Price and Offer Price */}
      <div className="flex gap-6">
        <div className="flex-1 text-gray-600 text-sm">
          <p className="mb-1">Price</p>
          <input
            className="w-full h-12 rounded px-4 border border-gray-300 outline-none text-sm"
            value={productdetail.old_price}
            onChange={changehandler}
            type="text"
            name="old_price"
            placeholder="Type here"
          />
        </div>
        <div className="flex-1 text-gray-600 text-sm">
          <p className="mb-1">Offer Price</p>
          <input
            className="w-full h-12 rounded px-4 border border-gray-300 outline-none text-sm"
            value={productdetail.new_price}
            onChange={changehandler}
            type="text"
            name="new_price"
            placeholder="Type here"
          />
        </div>
      </div>

      {/* Product Category */}
      <div className="text-gray-600 text-sm">
        <p className="mb-1">Product Category</p>
        <select
        value={productdetail.category}
        onChange={changehandler}
          name="category"
          className="w-full h-12 rounded px-4 border border-gray-300 outline-none text-sm"
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>

      {/* Upload Image */}
      <div className="text-gray-600 text-sm">
        <p className="mb-2">Upload Product Image</p>
        <label
          htmlFor="file_input"
          className="cursor-pointer inline-block border border-dashed border-gray-400 rounded-md p-4 hover:bg-gray-50"
        >
          <img
            src={image?URL.createObjectURL(image):upload_area}
            alt="Upload"
            className="w-44 h-44  mx-auto"
          />
        </label>
        <input onChange={imagehandler} type="file" name="image" id="file_input" hidden />
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button onClick={()=>{addproduct()}} className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-2 rounded-md transition">
          ADD
        </button>
      </div>
    </div>
  );
}

export default Addproduct;

import React, { useEffect, useState } from 'react';
import cross_icon from "../../assets/cross_icon.png";

function Listproduct() {
  const [allproducts, setallproducts] = useState([]);

  const fetchinfo = async () => {
    await fetch('http://localhost:4000/api/getproducts')
      .then((res) => res.json())
      .then((data) => {
        setallproducts(data);
      });
  };

  useEffect(() => {
    fetchinfo();
  }, []);
  let removeproduct=async(id)=>{
    await fetch("http://localhost:4000/api/delete",
        {
            method:'DELETE',
            headers:{
                Accept:"application/json",
                'Content-Type':'application/json',
            },
            body:JSON.stringify({id:id})
        }
    )
    await fetchinfo()
  }

  return (
    <div className="w-full max-w-[1200px] mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">All Products</h1>

      {/* Table Headings */}
      <div className="grid grid-cols-6 font-semibold text-sm text-gray-600 bg-gray-100 px-4 py-3 rounded-md shadow-sm">
        <p>Image</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>

      <div className="mt-2 divide-y divide-gray-200">
        {allproducts.map((product, index) => (
          <div
            key={index}
            className="grid grid-cols-6 items-center text-sm text-gray-700 px-4 py-3 hover:bg-gray-50 transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-14 h-14 object-cover rounded-md border"
            />
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <img
            onClick={()=>{removeproduct(product.id)}}
              src={cross_icon}
              alt="Remove"
              className="w-6 h-6 cursor-pointer hover:scale-110 transition"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listproduct;

import React, { useEffect, useState, createContext } from "react";

export const dataContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index <= 300; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContext = (props) => {
  const [all_product, setAllproduct] = useState([]);
  const [cartitem, setCartitem] = useState(getDefaultCart());

  useEffect(() => {
    // ✅ Fix API URL & parse JSON
    fetch("http://localhost:4000/api/getproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllproduct(data); // ✅ store products
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
      });
      if(localStorage.getItem('auth-token')){
        fetch('http://localhost:4000/api/getcart',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'auth-token':`${localStorage.getItem('auth-token')}`,
                'Content-Type':'application/json',
            },
            body:"",

            
        }).then((response)=>response.json())
        .then((data)=>setCartitem(data))
      }
  }, []);

  const addToCart = (itemid) => {
    setCartitem((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
    if(localStorage.getItem('auth-token')){
        fetch('http://localhost:4000/api/addtocart',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'auth-token':`${localStorage.getItem('auth-token')}`,
                'Content-Type':'application/json',
            },
            body:JSON.stringify({"itemid":itemid})
        })
        .then((respone)=>respone.json())
        .then((data)=>console.log(data))

    }
  };

  const RemovefromCart = (itemid) => {
    setCartitem((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
    if(localStorage.getItem('auth-token')){
        fetch('http://localhost:4000/api/removecart',{
            method:'DELETE',
            headers:{
                Accept:'application/json',
                'auth-token':`${localStorage.getItem('auth-token')}`,
                'Content-Type':'application/json',
            },
            body:JSON.stringify({"itemid":itemid})
        })
        .then((respone)=>respone.json())
        .then((data)=>console.log(data))

    }
  };

  const gettotalcartitem = () => {
    let totalitem = 0;
    for (const item in cartitem) {
      if (cartitem[item] > 0) {
        totalitem += cartitem[item];
      }
    }
    return totalitem;
  };

  const contextValue = {
    all_product,
    cartitem,
    addToCart,
    RemovefromCart,
    gettotalcartitem,
  };

  return (
    <dataContext.Provider value={contextValue}>
      {props.children}
    </dataContext.Provider>
  );
};

export default ShopContext;

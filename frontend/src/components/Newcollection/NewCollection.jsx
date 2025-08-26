import React, { useEffect, useState } from 'react';

import Items from '../items/Items';

function NewCollection() {
  let  [new_collection,setNew_collection]=useState([])
  useEffect(()=>{
    fetch('http://localhost:4000/api/new-collection')
    .then((response)=>response.json())
    .then((data)=>setNew_collection(data))

  },[])
  return (
    <div className="flex flex-col items-center gap-4 py-8 px-4">
      <h1 className="text-[#171717] text-[32px] font-semibold text-center">
        NEW COLLECTIONS
      </h1>
      <div className="w-[200px] h-[3px] bg-[#252525] rounded"></div>

      <div className="mt-8 flex mx-20 gap-8 justify-center flex-wrap">
        {new_collection.map((item, i) => (
          <Items
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
}

export default NewCollection;

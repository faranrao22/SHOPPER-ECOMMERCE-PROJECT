import React, { useContext } from 'react'
import { dataContext } from '../context/ShopContext'
import BreadCrum from '../components/breadcrums/BreadCrum'
import { useParams } from 'react-router-dom'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import Descriptionbox from '../components/Descriptionbox/Descriptionbox'
import RelatedProducts from '../components/RelatedProducts/RelatedProducts'


function Product() {
  const {all_product}=useContext(dataContext )
  const {productId}=useParams()
  const product=all_product.find((e)=>e.id=== Number(productId))
  return (
    <div>
      <BreadCrum product={product}/>
      <ProductDisplay product={product}/>
      <Descriptionbox/>
      <RelatedProducts/>
      
    </div>
  )
}

export default Product

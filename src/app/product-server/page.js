import React from 'react'
import { getProducts } from '../api-services/productApi'
import ListProduct from '../components/product-list/ListProduct';

const ProductServer =  async () => {

  let data = await getProducts()
  console.log(data);
  
  return (
    <div>
      <h1 className='text-3xl py-10 text-center'>Product Server</h1>
      <ListProduct Data={data}/>
      
    </div>
  )
}

export default ProductServer
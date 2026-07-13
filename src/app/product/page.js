'use client'
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/comman/ProductCard'
import axios from 'axios';

const Page = () => {
  const [product, setProduct] = useState([]);


  let getProduct = ()=>{
    
    axios.get("https://dummyjson.com/products")
    .then((res)=>{
      console.log(res.data.products)
      setProduct(res.data.products)
    })
  }

  useEffect(()=> {
    getProduct()
  } ,[])
  return (
    <div>
       <h1 className='text-3xl py-10 text-center'>Product</h1>
       <div className='max-w-[1320px] mx-auto m-10'>
        <div className='grid grid-cols-4 gap-4'>
          {
            product.map(( obj , index)=>{
             return    <ProductCard key={index} Data={obj}/>
            })
          }
        </div>
       </div>
      </div>
  )
}

export default Page
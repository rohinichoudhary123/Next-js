import Link from 'next/link'
import React from 'react'

const ProductCard = ({Data}) => {
// if (!Data) {
//   return <h1>No Data</h1>;
// }
  
  return (
    <>

    {
      Data ? <figure className='bg-white rounded-lg shadow-md p-4'>
        <img  className='rounded-lg' src={Data.thumbnail} alt="" />
        <h3 className='text-xl font-bold' >{Data.title}  </h3>
        <h2 className='font-semibold'>₹ {Data.price}</h2>
        <p className='mt-2'>{Data.description}</p>
        <button className='bg-black text-white px-4 py-2 rounded mt-2'>
           <Link href={`/product-server/${Data.id}`}>Read More</Link>
        </button>
    </figure> : 
    <figure className='bg-white rounded-lg shadow-md p-4'>
        <img  className='rounded-lg' src="https://images.unsplash.com/photo-1567894882729-35dbb3bf8113?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h3>Product1</h3>
        <p className='mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore voluptatibus tenetur voluptatem obcaecati.</p>
        <button className='bg-black text-white px-4 py-2 rounded mt-2'>Read More</button>
    </figure> 
    }
    </>
  )
}

export default ProductCard
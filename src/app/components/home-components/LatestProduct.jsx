import React from 'react'
import ProductCard from '../comman/ProductCard'

const LatestProduct = () => {
  return (
    <section className='bg-lime-50 py-10'>
      <h2 className='text-3xl font-bold text-center '>Latest Product</h2>

      <div className='max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-10'>
        <ProductCard/>
      </div>
    </section>
  )
}

export default LatestProduct
"use client";
import React, { useState } from "react";
import ProductCard from "../comman/ProductCard";

const ListProduct = ({ Data }) => {
  const [product, setProduct] = useState(Data);
  return (
    <div>
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-4 gap-4">
          {product.map((obj, index) => {
            return <ProductCard key={index} data={obj} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ListProduct;

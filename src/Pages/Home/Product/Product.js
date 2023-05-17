import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Product = () => {
    const [Products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <div className='text-center mb-5'>
                <p className='text-2xl font-bold text-red-600'>Popular Products</p>
                <h1 className='text-5xl font-bold'>Browse Our Products</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8'>
                {
                    Products.map(product => <ProductCard
                    key={product._id}
                    product={product}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Product;
import React from 'react';

const ProductCard = ({ product }) => {
    const { title, img, balance } = product;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className='p-10 rounded-xl'>
            <figure className=" bg-slate-300">
                <img src={img} alt="Shoes" className="h-48" />
            </figure>
            </div>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{balance}</p>
            </div>
        </div>
    );
};

export default ProductCard;
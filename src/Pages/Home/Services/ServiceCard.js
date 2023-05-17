import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const {_id, img, title, balance } = service;
    return (
        <div>
            <div className="card card-compact bg-base-100 border">
                <figure><img src={img} alt="Shoes" className='p-5 h-64 w-full'/></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className=' text-orange-600 font-semibold'>Price: {balance}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/checkout/${_id}`}>
                        <button className='text-orange-600'>
                            <FaArrowRight></FaArrowRight>
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
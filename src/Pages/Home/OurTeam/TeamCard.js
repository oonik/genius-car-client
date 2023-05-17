import React from 'react';
import { FaFacebook, FaGooglePlus, FaInstagramSquare, FaLinkedin, FaTwitter } from 'react-icons/fa';

const TeamCard = ({ person }) => {
    const { img, name, title } = person;
    return (
        <div className="card w-full bg-base-50 border">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{name}</p>
                <div className="card-actions">
                    <FaFacebook className='text-cyan-800 text-2xl'></FaFacebook>
                    <FaTwitter className='text-sky-500 text-2xl'></FaTwitter>
                    <FaInstagramSquare className='text-rose-500 text-2xl'></FaInstagramSquare>
                    <FaLinkedin className='text-blue-600 text-2xl'></FaLinkedin>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import partsImg from '../../../assets/images/about_us/parts.jpg';


const About = () => {
    return (
        <div className="hero mb-10 bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                <img src={person} alt="" className='rounded-lg shadow-2xl w-4/5 h-full' />
                <img src={partsImg} alt='' className="absolute rounded-lg shadow-2xl w-3/5 top-1/2 border-8 right-5" />
                </div>
                <div className='w-1/2'>
                    <p className="text-2xl font-bold text-red-600 py-3">About Us</p>
                    <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className='py-6'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;
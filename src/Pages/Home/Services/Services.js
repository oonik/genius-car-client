import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    // console.log(services)
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='py-10'>
            <div className='text-center mb-10'>
                <p className="text-2xl font-bold text-red-600">Service</p>
                <h2 className='text-5xl font-bold'>Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                   services.map(service => <ServiceCard
                   key={service.service_id}
                   service={service}
                   ></ServiceCard>) 
                }
            </div>
           <div className='text-center my-5'>
           <button className="btn btn-outline btn-error">More Services</button>
           </div>
        </div>
    );
};

export default Services;
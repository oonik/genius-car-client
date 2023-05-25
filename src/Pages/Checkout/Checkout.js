import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const {_id, title, balance } = useLoaderData();
    const {user} = useContext(AuthContext);

    const handlePlaceOrder = event =>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.yourPhone.value;
        const email = user?.email || 'unsubscribe';
        const message = form.message.value;
        
        const order = {
            service: _id,
            serviceName: title,
            balance,
            customerName: name,
            phone,
            email,
            message
        };
        fetch('https://genius-car-server-two-alpha.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type':'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('order place successfully');
                form.reset();
            }
        })
        .catch(err => console.error(err));
    }
    return (
        <div className='m-20 bg-slate-100 p-10 rounded'>
            <form onSubmit={handlePlaceOrder}>
                <div className='mb-4'>
                <h2 className="text-4xl">Your order about to: {title}</h2>
                <h4 className="text-3xl">Price: {balance}</h4>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='firstName' type="text" placeholder="First name" className="input input-ghost w-full input-bordered" />
                    <input name='lastName' type="text" placeholder="Last name" className="input input-ghost w-full input-bordered" />
                    <input name='yourPhone' type="number" placeholder="Your phone" className="input input-ghost w-full input-bordered" required />
                    <input name='email' type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full input-bordered" readOnly />
                </div>
                <textarea name='message' placeholder="Your message" className="textarea textarea-bordered textarea-lg w-full my-5" ></textarea>
                <input type="submit" value="Order Confirm" className="btn btn-warning w-full" />
            </form>
        </div>
    );
};

export default Checkout;
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const {user} = useContext(AuthContext);
    const [orders, setOrders] = useState(); 
    console.log(orders)
    useEffect(()=>{
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [user?.email]);

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure, you want to cancel your order');
        if(proceed){
          fetch(`http://localhost:5000/orders/${id}`, {
              method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
              console.log(data)
              if(data.deletedCount > 0){
                alert('your order delete successfully')
                const remaining = orders.filter(odr => odr._id !== id);
                setOrders(remaining)
              }
          })
        }
      }

      const handleStatusUpdate = id =>{
          fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PATCH',
            headers: {
              'content-type':'application/json'
            },
            body: JSON.stringify({status: 'Approved'})
          })
         .then(res => res.json())
         .then(data => {
           console.log(data)
           if(data.modifiedCount > 0){
            const remaining = orders.filter(odr => odr._id !== id);
            const approving = orders.find(odr => odr._id === id);
            approving.status = 'Approved';

            const newOrders = [ approving, ...remaining];
            setOrders(newOrders)
           }
         })
      }
    return (
        <div>
           <h2 className='text-3xl'>{orders?.length}</h2>
           <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
       <th>

       </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th>Message</th>
      </tr>
    </thead>
    <tbody>
       {
        orders?.map(order => <OrderRow
        key={order._id}
        order={order}
        handleDelete={handleDelete}
        handleStatusUpdate={handleStatusUpdate}
        ></OrderRow>)
       }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Orders;
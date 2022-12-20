import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import OrderCancelConfirm from './OrderCancelConfirm';


const ManageOrders = () => {
    const [cancelOrder, setCancelOrder] = useState(null);
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`https://car-parts-manufacturer-server.onrender.com/orders`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json())
    );

    if (isLoading) {
        return <Loading />
    }

    const handleShipped = (_id) => {

        const payment = { status: "Shipped" }
        fetch(`https://car-parts-manufacturer-server.onrender.com/order/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(payment)
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                toast('Shipped successfull')
            })
    }
    return (
        <div>
            <h2 className='text-2xl'>Manage All Orders: {orders?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Customer Info</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td className='font-semibold'>Name: {order.userName} <br /> 
                                Address: {order.address}</td>
                                <td>{order.product}</td>
                                <td>{order.orderQuantity}</td>
                                <td>{order.price}</td>
                                <td>{order.status}</td>
                                <td>
                                    {order.status === "Pending" ? <button onClick={() => handleShipped(order._id)} className='btn btn-xs btn-primary'>Shipped</button> : <button className='btn btn-xs' disabled>Shipped</button>}
                                    {!order.paid ? <label onClick={() => setCancelOrder(order)} htmlFor="cancel-confirm-modal" className='btn btn-xs btn-error'>Cancel</label> : <button className='btn btn-xs' disabled>Cancel</button>}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                cancelOrder && <OrderCancelConfirm
                    cancelOrder={cancelOrder}
                    setCancelOrder={setCancelOrder}
                    refetch={refetch}
                />
            }
        </div>
    );
};

export default ManageOrders;
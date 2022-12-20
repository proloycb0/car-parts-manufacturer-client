import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import OrderCancelConfirm from './OrderCancelConfirm';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [cancelOrder, setCancelOrder] = useState(null)
    const navigate = useNavigate();
    const { data: orders, isLoading, refetch } = useQuery(["orders", user, navigate], () => fetch(`https://car-parts-manufacturer-server.onrender.com/order?userEmail=${user.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => {

            if (res.status === 401 || res.status === 403) {
                signOut(auth);
                localStorage.removeItem('accessToken');
                navigate('/');
            }
            return res.json();
        })
    );

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h2 className='text-xl font-bold'>My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.product}</td>
                                <td>{order.orderQuantity}</td>
                                <td>{order.price}</td>
                                <td>{order.status}</td>
                                <td>
                                    {(order.price && !order.paid) && <Link to={`payment/${order._id}`}><button className='btn btn-xs btn-primary'>Pay</button></Link>}
                                    {(order.price && order.paid) && <div className='text-success'>
                                        <p>Paid</p>
                                        <p>Transaction id: <span>{order.transactionId}</span></p>
                                        </div>}
                                </td>
                                <td>{!order.paid ? <label onClick={() => setCancelOrder(order)} htmlFor="cancel-confirm-modal" className='btn btn-xs btn-error'>Cancel</label> : <button className='btn btn-xs' disabled>Cancel</button>}</td>

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

export default MyOrders;
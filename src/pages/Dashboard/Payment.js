import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0eRwKEErB9NVHS5sUdXuwmf4krkFKDHJ9qn8A8QbYMMUuROH996IbjMP9Jo78ajuoReiARt5gZ1nvX5MpSiRzT00h0BJrOWY');

const Payment = () => {
    const { id } = useParams();
    const [part, setPart] = useState({});
    const url = `http://localhost:5000/orders/${id}`;

    const { data: order, isLoading } = useQuery('order', () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    useEffect(() => {
        fetch(`http://localhost:5000/parts/${id}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setPart(data))
    }, [id]);

    if (isLoading) {
        return <Loading />
    }

    if (order?.status === 'pending') {
        const availableQuantity = parseInt(part.quantity);
        const orderedQuantity = parseInt(order.orderQuantity);
        console.log(availableQuantity, orderedQuantity)

        const updatedQuantity = availableQuantity - orderedQuantity;

        // update quantity 
        const url = `http://localhost:5000/updateQuantity/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ updatedQuantity }),
        })
            .then(res => res.json())
            .then(data => {
                
            });
    }
    return (
        <div className='ml-5 mb-5'>
            <div className="card w-50 max-w-md bg-base-100 shadow-2xl my-12">
                <div className="card-body">
                    <p className='text-primary'>Hello, {order?.userName}</p>
                    <h2 className="card-title">Please Pay for {order.product}</h2>
                    <p>Your Order Quantity: {order.orderQuantity}</p>
                    <p>Please pay: ${order.price}</p>
                </div>
            </div>
            <div className="card w-50 max-w-md bg-base-100 shadow-2xl">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import PurchaseConfirmationModal from './PurchaseConfirmationModal';

const Purchase = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const quantityRef = useRef('');
    const [disable, setDisable] = useState(false);
    const [order, setOrder] = useState(null);
    const [minOrderQuantity, setMinOrderQuantity] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://car-parts-manufacturer-server.onrender.com/parts/${id}`)
            .then(res => res.json())
            .then(data => {
                setMinOrderQuantity(parseInt(data.orderQuantity));
                setProduct(data);
            })
    }, [id])

    const { image, name, description, orderQuantity, quantity, price } = product;

    const handleIncrease = () => {
        const availableQuantity = parseInt(quantity);

        if(minOrderQuantity >= availableQuantity){
            toast.error('Your quantity higher than available quantity')
            setDisable(true);
            return;
        }

        setMinOrderQuantity(minOrderQuantity + 1);
        setDisable(false);
    }
    const handleDecrease = () => {
        const minimumQuantity = parseInt(orderQuantity);

        if(minOrderQuantity <= minimumQuantity){
            toast.error('Your quantity lower than minimum order quantity');
            setDisable(true);
            return;
        }
        setMinOrderQuantity(minOrderQuantity - 1);
        setDisable(false);
    }
    return (
        <div className='grid justify-center mt-4 mb-5'>
            <h2 className='text-3xl text-primary text-center mb-3'>Purchase please</h2>
            <div className="card bg-base-100 shadow-xl lg:w-96">
                <figure><img src={image} alt="" className='w-64 h-64' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p><small>Available Quantity: {quantity}</small></p>
                    <p><small>Minimum Order Quantity: {orderQuantity}</small></p>
                    <p><small>Price: ${price}<span className="badge badge-sm ml-1">Per One</span></small></p>
                    <div className='flex items-center'>Order Quantity:
                        <div>
                            <button onClick={handleDecrease} className='ml-2'><AiOutlineMinus /></button>
                            <input type="text" ref={quantityRef} value={minOrderQuantity} readOnly className="border border-solid text-center w-8 h-5 mr-2 ml-2" />
                            <button onClick={handleIncrease}><AiOutlinePlus /></button>
                        </div>
                    </div>
                    <label onClick={() => setOrder(product)} disabled={disable} htmlFor="order-confirm-modal" className='btn btn-primary text-white'>Place Order</label>
                </div>
            </div>
            {
                order && <PurchaseConfirmationModal 
                    order={order}
                    setOrder={setOrder}
                    minOrderQuantity={minOrderQuantity}
                />
            }
             <button onClick={() => navigate('/dashboard/orders')} className='btn btn-primary text-white w-2/4 mx-auto mt-3'>My Orders</button>
        </div>
    );
};

export default Purchase;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({product}) => {
    const {_id, image, name, quantity, orderQuantity, price, description} = product;
    const navigate = useNavigate();
    return (
        <div className="card bg-base-100 shadow-xl md:mr-4">
            <figure><img src={image} alt="" className='h-72' /></figure>
            <div className="card-body">
                <h2 className="card-title text-neutral">{name}</h2>
                <p>{description}</p>
                <p><small>Available Quantity: {quantity}</small></p>
                <p><small>Minimum Order Quantity: {orderQuantity}</small></p>
                <p><small>Price: ${price}<span className="badge badge-sm ml-1">Per One</span></small></p>
                <div className="card-actions justify-end">
                    <button onClick={() => navigate(`/purchase/${_id}`)} className="btn btn-neutral">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;
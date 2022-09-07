import React from 'react';
import { toast } from 'react-toastify';

const OrderCancelConfirm = ({cancelOrder, setCancelOrder, refetch}) => {
    const {_id, product} = cancelOrder;

    const handleDelete = () => {
        fetch(`https://young-citadel-45878.herokuapp.com/orders/${_id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount) {
                toast.success(`${product} is deleted`);
                setCancelOrder(null);
                refetch();
            }
        })
    }
    return (
        <div>
            <input type="checkbox" id="cancel-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-accent">Are you sure you want to delete {product}!</h3>
                    <p className="py-4">You've been selected for a product for delete click delete button . You want not cancel button click.</p>
                    <div className="modal-action">
                        <button onClick={() => handleDelete()} className="btn btn-xs btn-error">Delete</button>
                        <label htmlFor="cancel-confirm-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCancelConfirm;
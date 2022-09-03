import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const PurchaseConfirmationModal = ({order, setOrder, minOrderQuantity}) => {
    const {_id, name, price} = order;
    const [user] = useAuthState(auth);
    const handleSubmit = (event) => {
        event.preventDefault();

        const phone = event.target.phone.value;
        const address = event.target.address.value;
        const newPrice = parseInt(price);
        const totalPrice = newPrice * minOrderQuantity;

        const orders = {
            productID: _id,
            userName: user.displayName,
            userEmail: user.email,
            phone: phone,
            address: address,
            product: name,
            price: totalPrice,
            orderQuantity: minOrderQuantity,
            status: "unpaid"
        }

        // booking order 
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
        .then(res => res.json())
        .then(data => {
            toast.success('Your order is successfully completed');
            event.target.reset();
            setOrder(null);
        })
    }
    return (
        <div>
            <input type="checkbox" id="order-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="order-confirm-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className='text-2xl text-primary text-center mb-5'>Customer Info</h3>
                    <h3 className="font-bold text-lg text-primary text-center">Order for:{name}</h3>
                    <form onSubmit={handleSubmit} className='grid gird-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='address' placeholder="Address" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Order Now" className="btn btn-primary text-white w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PurchaseConfirmationModal;
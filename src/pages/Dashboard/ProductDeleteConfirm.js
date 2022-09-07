import React from 'react';
import { toast } from 'react-toastify';

const ProductDeleteConfirm = ({deleteProduct, setDeleteProduct, refetch}) => {
    const { _id, name } = deleteProduct;

    const handleDelete = () => {
        fetch(`https://young-citadel-45878.herokuapp.com/parts/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    toast.success(`${name} is deleted`);
                    setDeleteProduct(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete {name}!</h3>
                    <p className="py-4">You've been selected for a product for delete are you sure click the delete button . You want not sure click the cancel button.</p>
                    <div className="modal-action">
                        <button onClick={() => handleDelete()} className="btn btn-xs btn-error">Delete</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProductDeleteConfirm;
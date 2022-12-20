import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ProductDeleteConfirm from './ProductDeleteConfirm';

const ManageProduct = () => {
    const [deleteProduct, setDeleteProduct] = useState(null);
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch(`https://car-parts-manufacturer-server.onrender.com/parts`, {
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
    return (
        <div>
            <h2 className='text-2xl'>Manage All Products: {products?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Info</th>
                            <th>Product</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((product, index) => <tr key={product._id}>
                                <th>{index + 1}</th>
                                <td>ProductId: {product._id}</td>
                                <td>{product.name}</td>
                                <td>
                                    <label onClick={() => setDeleteProduct(product)} htmlFor="delete-confirm-modal" className='btn btn-xs btn-error'>Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteProduct && <ProductDeleteConfirm
                    deleteProduct={deleteProduct}
                    setDeleteProduct={setDeleteProduct}
                    refetch={refetch}
                />
            }
        </div>
    );
};

export default ManageProduct;
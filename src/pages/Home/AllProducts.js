import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Part from './Part';

const AllProducts = () => {
    const { data: products, isLoading } = useQuery("parts", () => fetch('https://young-citadel-45878.herokuapp.com/parts')
        .then(res => res.json())
    )

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className="max-w-7xl mx-auto mt-3 mb-8">
            <h4 className='text-3xl text-center font-bold mb-8 mt-16'>Available Products</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5' >
                    {
                        products?.map(product => <Part
                            key={product._id}
                            product={product}
                        />)
                    }
            </div>
        </div>
    );
};

export default AllProducts;
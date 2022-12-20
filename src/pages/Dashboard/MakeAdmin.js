import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://car-parts-manufacturer-server.onrender.com/users',{
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
        <h1 className='text-2xl'>All Users: {users?.length}</h1>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Make Admin</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user, index) => <UserRow 
                            key={user._id}
                            index={index + 1}
                            user={user}
                            refetch={refetch}
                        />)
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MakeAdmin;
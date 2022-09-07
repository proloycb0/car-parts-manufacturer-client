import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ index, user, refetch }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`https://young-citadel-45878.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully make an admin');
                }
            })
    }
    return (
        <tr>
            <th>{index}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-primary text-white btn-xs">Make Admin</button>}</td>
            <td><button className="btn btn-error btn-xs">Remove User</button></td>
        </tr>
    );
};

export default UserRow;
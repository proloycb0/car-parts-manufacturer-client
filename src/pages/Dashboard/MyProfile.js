import React from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [updateProfile, updating] = useUpdateProfile(auth);
    const { data: users, isLoading, refetch } = useQuery(['users', user], () => fetch(`http://localhost:5000/user?email=${user?.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading || updating) {
        return <Loading />
    }

    const handleSubmit =  (event) => {
        event.preventDefault();
        let photo;
        let education;
        let phone;
        let address;
        if (event.target.photo.value === '') {

        }
        else {
            photo = event.target.photo.value;
        }
        if (event.target.education.value === '') {

        }
        else {
            education = event.target.education.value;
        }
        if (event.target.phone.value === '') {

        }
        else {
            phone = event.target.phone.value;
        }
        if (event.target.address.value === '') {

        }
        else {
            address = event.target.address.value;
        }
        const users = {
            name: user?.displayName,
            photo: photo,
            education: education,
            phone: phone,
            address: address
        }

        fetch(`http://localhost:5000/user/${user?.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(async (data) => {
                console.log(data);
                toast.success('save information successfully');
                refetch();
                <Loading/>
                await updateProfile({photoURL: photo});
                event.target.reset();
            })
    }
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2'>
            <div>
                <h3 className='text-2xl mb-5'>My Profile</h3>
                {
                    users?.map(user => <div key={user._id} className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div class="avatar">
                                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={user?.photo} alt="" />
                                </div>
                            </div>
                            <h2 className="card-title">Name: {user?.name}</h2>
                            <p>Email: {user.email}</p>
                            <p>Education: {user.education}</p>
                            <p>Phone: {user.phone}</p>
                            <p>Address: {user.address}</p>
                        </div>
                    </div>)
                }
            </div>
            <div>
                <h3 className='text-2xl mb-5'>Update Information</h3>
                <form onSubmit={handleSubmit} className='grid gird-cols-1 gap-3 mt-2'>
                    <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                    <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='education' placeholder="Education" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='address' placeholder="Address" className="input input-bordered w-full max-w-xs" />
                    <button type='submit' className='btn btn-primary text-white w-full max-w-xs'>Save</button>
                </form>
            </div>
        </div>
    );
};

export default MyProfile;
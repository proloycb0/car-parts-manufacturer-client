import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);

    const ratingRef = useRef('')
    const descriptionRef = useRef('')
    const handleSubmit = (event) => {
        event.preventDefault();
        const rating = ratingRef.current.value;
        const description = descriptionRef.current.value;
        const review = {
            name: user.displayName,
            image: user.photoURL,
            rating: rating,
            description: description
        }
        fetch('https://young-citadel-45878.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Review added successfully');
                event.target.reset();
            })
    }
    return (
        <div>
            <h1 className='text-xl text-primary'>Please add a review</h1>
            <form className='mt-5' onSubmit={handleSubmit}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="text" ref={ratingRef} placeholder="Rating" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea type="text" ref={descriptionRef} placeholder="Description" className="textarea textarea-bordered w-full max-w-xs" />
                </div>
                <input className='btn btn-primary w-full max-w-xs mt-3' type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default AddReview;
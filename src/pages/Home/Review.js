import React from 'react';
import Rate from '../../hooks/Rate';

const Review = ({review}) => {
    const {rating, image, name, description} = review
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <Rate rate={rating} />
                <p>{description}</p>
                <div className="flex items-center">
                    <div class="avatar">
                        <div class="w-12 rounded-full">
                            <img src={image} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{name}</h4>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
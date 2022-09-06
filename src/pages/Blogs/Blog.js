import React from 'react';

const Blog = ({ blog }) => {
    const { _id, image, name, author, date, description } = blog;
    return (
        <div className="card bg-base-100 shadow-2xl md:mr-4">
            <figure><img src={image} alt="" className='' /></figure>
            <div className="card-body">
                <div className='flex items-center'>
                    <p>{date}</p>
                    <p className='text-xl font-semibold'><small>Author: {author}</small></p>
                </div>
                <h2 className="card-title text-primary">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary text-white">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;
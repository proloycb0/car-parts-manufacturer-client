import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Blog from './Blog';

const Blogs = () => {
    const { data: blogs, isLoading } = useQuery("blogs", () => fetch('https://car-parts-manufacturer-server.onrender.com/blogs')
        .then(res => res.json())
    )

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className="max-w-7xl mx-auto mt-3 mb-8">
            <h4 className='text-3xl text-center font-bold mb-8 mt-16'>Our Blogs</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5' >
                {
                    blogs?.map(blog => <Blog
                        key={blog._id}
                        blog={blog}
                    />)
                }
            </div>
        </div>
    );
};

export default Blogs;
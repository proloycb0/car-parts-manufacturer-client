import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllKinds = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="hero md:py-40 py-20 bg-[url('https://htmldemo.net/lukas/lukas/assets/img/bg/bg-1.jpg')]" >
                <div className="">
                    <div className="max-w-lg text-center">
                        <h3 className="lg:mb-5 mb-3 md:text-4xl text-lg uppercase font-bold">ALL KINDS OF PARTS THAT YOU NEED CAN FIND HERE</h3>
                        <button onClick={() => navigate('/allProduct')} className="btn btn-primary text-white">Shop Now</button>
                    </div>
                </div>
            </div>
            <div className='w-3/4 mx-auto -mt-16 md:-mt-32'>
                <img src="https://i.ibb.co/QYSFHFx/bg-car.webp" alt="" />
            </div>
        </div>
    );
};

export default AllKinds;
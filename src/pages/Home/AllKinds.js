import React from 'react';

const AllKinds = () => {
    return (
        <div>
            <div class="hero md:py-40 py-20 bg-[url('https://htmldemo.net/lukas/lukas/assets/img/bg/bg-1.jpg')]" >
                <div class="">
                    <div class="max-w-lg text-center">
                        <h3 class="lg:mb-5 mb-3 md:text-4xl text-lg uppercase font-bold">ALL KINDS OF PARTS THAT YOU NEED CAN FIND HERE</h3>
                        <button class="btn btn-primary text-white">Shop Now</button>
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
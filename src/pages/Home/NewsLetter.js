import React from 'react';
import Countdown from './Countdown';

const NewsLetter = () => {
    return (
        <div>
            <div class="hero md:py-40 py-20 bg-[url('https://htmldemo.net/lukas/lukas/assets/img/bg/bg-1.jpg')]" >
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div>
                        <img src="https://i.ibb.co/7YKzFgW/wheels.webp" alt="" />
                    </div>
                    <div className='text-center'>
                        <h2 className='font-bold text-black text-5xl mb-3'>FLASH DEALS</h2>
                        <h3 className='font-bold text-black text-3xl mb-8'>HURRY UP AND GET 25% DISCOUNT</h3>
                        <button class="btn btn-primary mb-8">Shop Now</button>
                        <Countdown />
                    </div>
                </div>
            </div>
            <div className='w-full lg:px-24 -mt-16 md:-mt-28'>
                <div class="hero py-24 bg-[url('https://i.ibb.co/1TZMh5Y/newsletter-bg.webp')]" >
                    <div className="mx-auto text-center text-neutral-content">
                        <div className="lg:max-w-md md:max-w-sm text-white">
                            <h3 className='uppercase font-semibold mb-4'>SPECIAL <span className='text-primary'>OFFER</span> FOR SUBSCRIPTION</h3>
                            <h1 className="max-w-md mx-auto text-3xl text-center font-bold">GET INSTANT DISCOUNT FOR MEMBERSHIP</h1>
                            <p>Subscribe our newsletter and all latest news of our latest product, promotion and offers</p>
                            <div className="form-control">
                                <div className="input-group mt-5 mb-7">
                                    <input type="text" placeholder="Enter your name here" className="input input-bordered rounded-3xl lg:w-96 ml-2" />
                                    <button className="btn btn-primary text-white">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
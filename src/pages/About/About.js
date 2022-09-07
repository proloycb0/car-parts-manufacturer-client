import React from 'react';
import AllKinds from '../Home/AllKinds';

const About = () => {
    return (
        <div className='lg:py-12 py-5'>
            <div className="hero lg:pt-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/qkYw1Cj/a-1.webp" alt='' data-aos="zoom-in-up" data-aos-duration="3000" className="lg:max-w-lg rounded-lg shadow-2xl" />
                    <div className='lg:max-w-lg'>
                        <h1 className="text-3xl font-bold mb-2">About CarnoCar</h1>
                        <p className="py-2">This is a list of automotive parts mostly for vehicles using internal combustion engines which are manufactured components of automobiles.</p>
                        <p className="py-2">This category is for components and parts that make up automobile (car) bodies including accessories.</p>
                        <p className="py-2">On motorbikes their main function is to shield the rider from wind, though not as completely as in a car, whereas on sports and racing motorcycles the main function is reducing drag when the rider</p>
                    </div>
                </div>
            </div>

            {/* our mission */}

            <div className="hero lg:py-16 py-5">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/Bj3KY4f/a-2.webp" alt='' data-aos="zoom-in-up" data-aos-duration="3000" className="lg:max-w-lg rounded-lg shadow-2xl" />
                    <div className='lg:max-w-lg lg:ml-5'>
                        <h1 className="text-3xl font-bold mb-2">Our Mission</h1>
                        <p className="py-2">Our Mission is to create a better everyday life for many people. That's aspirational, short and to the point. More than that, it sets the tone for the company and makes it clear that they're in the market to offer This category is for components and parts that make up automobile (car) bodies including accessories.</p>
                        <p className="py-2">On motorbikes their main function is to shield the rider from wind, though not as completely as in a car, whereas on sports and racing motorcycles the main function is reducing drag when the rider</p>
                    </div>
                </div>
            </div>

            {/* all kinds  */}

            <AllKinds />
        </div>
    );
};

export default About;
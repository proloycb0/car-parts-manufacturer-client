import React from 'react';
import { FiPhone, FiClock } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';


const Contact = () => {
    return (
        <div className="py-16 lg:px-16 bg-slate-50">
            <h2 className='text-primary text-center text-3xl font-bold'>Contact Us</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:justify-items-center items-center lg:gap-3">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl text-primary font-bold mt-3">Call Us or Fill the Form</h1>
                    <div className='flex items-center mt-5'>
                        <FiPhone className='w-6 h-6 lg:mr-3 mr-0 ml-6' />
                        <span className='w-80'>
                            <b>987-589-2525</b>
                            <br />
                            Don't hesitate to contact us
                        </span>
                    </div>
                    <div className='flex items-center mt-5'>
                        <FiClock className='w-6 h-6 lg:mr-3 mr-0 ml-6' />
                        <span className='w-80'>
                            <b>9.00 am - 4.00 pm</b>
                            <br />
                            Open our office at this time
                        </span>
                    </div>
                    <div className='flex items-center mt-5'>
                        <GoLocation className='w-6 h-6 lg:mr-3 mr-0 ml-6' />
                        <span className='w-80'>
                            <b>Office Address </b>
                            <br />
                            5055 Forest Avenue
                            <br />
                            New York , 10015
                        </span>
                    </div>
                </div>
                <div className="lg:max-w-lg mt-5">
                    <div className="">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div>
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="text-center input input-bordered w-full" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Company</span>
                                </label>
                                <input type="text" placeholder="Company" className="text-center input input-bordered w-full" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div>
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email Address" className="text-center input input-bordered w-full" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="text" placeholder="Phone" className="text-center input input-bordered w-full" />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea type="text" placeholder="How can I help you ?" className="text-center textarea textarea-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-white">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
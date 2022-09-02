import React from 'react';
import { FaUsers, FaTools } from 'react-icons/fa';
import { RiExchangeDollarFill } from 'react-icons/ri';
import { MdReviews } from 'react-icons/md';

const BusinessSummary = () => {
    return (
        <div>
            <h2 className='text-3xl text-center font-bold mb-8 mt-16'>Business Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px-20 text-center">
                <div className="stat">
                    <div>
                    <FaUsers className="inline-block w-8 h-8 stroke-current"/>
                    </div>
                    <div className="stat-value text-accent">100+</div>
                    <div>We Served Customers</div>
                </div>

                <div className="stat">
                    <div>
                    <RiExchangeDollarFill className="inline-block w-8 h-8 stroke-current"/>
                    </div>
                    <div className="stat-value text-accent">120M+</div>
                    <div>Annual Revenue</div>
                </div>

                <div className="stat">
                    <div>
                        <MdReviews className="inline-block w-8 h-8 stroke-current"/>
                    </div>
                    <div className="stat-value text-accent">33K+</div>
                    <div>Reviews</div>
                </div>

                <div className="stat">
                    <div>
                    <FaTools className="inline-block w-8 h-8 stroke-current"/>
                    </div>
                    <div className="stat-value text-accent">50+</div>
                    <div>Tools</div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;
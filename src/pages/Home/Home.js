import React from 'react';
import AllKinds from './AllKinds';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import NewsLetter from './NewsLetter';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <Parts />
            <AllKinds />
            <BusinessSummary />
            <NewsLetter />
            <Reviews/>
        </div>
    );
};

export default Home;
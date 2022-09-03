import React from 'react';
import AllKinds from './AllKinds';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Parts from './Parts';

const Home = () => {
    return (
        <div>
            <Banner />
            <Parts />
            <AllKinds />
            <BusinessSummary />
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from './Banner';
import Testimonials from './Testmonials';
import Service from './Service';
import Pricing from './Pricing';
import Teams from './Teams';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Service/>
            <Teams/>
            <Pricing/>
            <Testimonials/>
        </div>
    );
};

export default Home;
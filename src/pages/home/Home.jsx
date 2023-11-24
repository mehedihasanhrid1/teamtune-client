import React from 'react';
import Banner from './Banner';
import Testimonials from './Testmonials';
import Service from './Service';
import Pricing from './Pricing';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Service/>
            <Pricing/>
            <Testimonials/>
        </div>
    );
};

export default Home;
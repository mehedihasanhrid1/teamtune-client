import React from 'react';
import Banner from './Banner';
import Testimonials from './Testmonials';
import Service from './Service';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Service/>
            <Testimonials/>
        </div>
    );
};

export default Home;
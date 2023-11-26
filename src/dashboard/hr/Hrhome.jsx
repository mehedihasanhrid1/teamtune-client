import React from 'react';
import { Outlet } from 'react-router-dom';

const Hrhome = () => {
    return (
        <div className='py-5 pl-8'>
            <Outlet/>
        </div>
    );
};

export default Hrhome;
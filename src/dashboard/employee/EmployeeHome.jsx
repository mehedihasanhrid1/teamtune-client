import React from 'react';
import { Outlet } from 'react-router-dom';

const EmployeeHome = () => {
    return (
        <div className='p-5 md:p-8'>
            <Outlet/>
        </div>
    );
};

export default EmployeeHome;
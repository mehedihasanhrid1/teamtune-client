import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Dashboard = () => {
    useEffect(() => {
        document.title = "Dashboard - Team Tune";
      }, []);
    return (
        <div className='flex items-start justify-start'>
            <Sidebar/>
            <Outlet/>
        </div>
    );
};

export default Dashboard;
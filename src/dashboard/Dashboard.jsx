import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    useEffect(() => {
        document.title = "Dashboard - Team Tune";
      }, []);
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default Dashboard;
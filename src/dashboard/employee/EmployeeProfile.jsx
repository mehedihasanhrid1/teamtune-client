import React, { useEffect } from 'react';
import Profile from '../../components/Profile';

const EmployeeProfile = () => {
    useEffect(() => {
        document.title = "Profile - Employee | Team Tune";
      }, []);
    return (
        <div>
            <Profile/>
        </div>
    );
};

export default EmployeeProfile;
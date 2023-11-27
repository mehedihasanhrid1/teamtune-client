import React, { useEffect } from 'react';
import Profile from '../../components/Profile';

const AdminProfile = () => {
    useEffect(() => {
        document.title = "Profile - Admin | Team Tune";
      }, []);
    return (
        <div>
            <Profile/>
        </div>
    );
};

export default AdminProfile;
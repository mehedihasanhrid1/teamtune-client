import React, { useEffect } from 'react';

const HrProfile = () => {
    useEffect(() => {
        document.title = "Profile - Human Resource Executive";
      }, []);
    return (
        <div>
            Profile
        </div>
    );
};

export default HrProfile;
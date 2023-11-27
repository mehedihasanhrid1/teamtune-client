import React, { useEffect } from "react";
import Profile from "../../components/Profile";


const HrProfile = () => {

  useEffect(() => {
    document.title = "Profile - Human Resource Executive";
  }, []);
  return (
    <div>
        <Profile/>
    </div>
  );
};

export default HrProfile;

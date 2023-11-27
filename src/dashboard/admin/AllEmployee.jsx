import React, { useEffect } from 'react';

const AllEmployee = () => {
    useEffect(() => {
        document.title = "All Employee List - Admin | Dashboard";
      }, []);
    return (
        <div>
            All Employee
        </div>
    );
};

export default AllEmployee;
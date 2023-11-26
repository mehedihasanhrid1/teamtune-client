import React, { useEffect } from 'react';

const EmployeeList = () => {
    useEffect(() => {
        document.title = "Employee List - Dashboard";
      }, []);
    return (
        <div>
            Employee
        </div>
    );
};

export default EmployeeList;
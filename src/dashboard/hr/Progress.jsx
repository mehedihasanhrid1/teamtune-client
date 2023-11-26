import React, { useEffect } from 'react';

const Progress = () => {
    useEffect(() => {
        document.title = "Employee Progress - Dashboard";
      }, []);
    return (
        <div>
            Progress
        </div>
    );
};

export default Progress;
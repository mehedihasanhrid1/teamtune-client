import React, { useEffect } from 'react';

const WorkSheet = () => {
    useEffect(() => {
        document.title = "Work Sheet - Employee | Dashboard";
      }, []);
    return (
        <div>
            Work Sheet
        </div>
    );
};

export default WorkSheet;
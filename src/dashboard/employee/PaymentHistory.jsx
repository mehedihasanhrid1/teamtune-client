import React, { useEffect } from 'react';

const PaymentHistory = () => {
    useEffect(() => {
        document.title = "Payment History - Employee | Dashboard";
      }, []);
    return (
        <div>
            Payment History
        </div>
    );
};

export default PaymentHistory;
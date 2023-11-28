import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import EmployeeHrList from '../../components/EmployeeHrList';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE);

const EmployeeList = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
      <EmployeeHrList/>
    </Elements>
    </div>
  );
};

export default EmployeeList;
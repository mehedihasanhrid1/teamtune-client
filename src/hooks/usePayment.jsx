import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import moment from 'moment';
import useAuth from './useAuth';

const usePayment = () => {
  const {user} = useAuth();
  const { data: payments = [], isLoading: loading, refetch } = useQuery({
    queryKey: ['payments'],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/payments/${user.email}`);
      const sorted = res.data.sort((a, b) => {
        const dateA = moment(a.payment_for, 'MMMM YYYY');
        const dateB = moment(b.payment_for, 'MMMM YYYY');
        return dateB - dateA;
      });
      return sorted;
    },
  });

  return [payments, loading, refetch];
};

export default usePayment;

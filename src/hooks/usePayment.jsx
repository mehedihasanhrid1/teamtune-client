import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import useUser from './useUser';

const usePayment = () => {
    const [data] = useUser();
    const {data: payments = [], isPending: loading, refetch} = useQuery({
        queryKey: ['payments'], 
        queryFn: async() =>{
            const res = await axios.get(
                `http://localhost:5000/payments/${data._id}`
              );
            return res.data;
        }
    })
    return [payments, loading, refetch]
};

export default usePayment;
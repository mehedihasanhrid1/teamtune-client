import { useQuery } from '@tanstack/react-query';
import React from 'react';
import axios from "axios";

const useAllEmployee = () => {
    const {data: users = [], isPending: loading, refetch} = useQuery({
        queryKey: ['users'], 
        queryFn: async() =>{
            const res = await axios.get('http://localhost:5000/all-employee-list');
            return res.data;
        }
    })

    return [users, loading, refetch]
};

export default useAllEmployee;
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from "axios";

const useEmployeeList = () => {
    const {data: users = [], isPending: loading, refetch} = useQuery({
        queryKey: ['users'], 
        queryFn: async() =>{
            const res = await axios.get('https://team-tune-server.vercel.app/employee-list');
            return res.data;
        }
    })

    return [users, loading, refetch]
};

export default useEmployeeList;
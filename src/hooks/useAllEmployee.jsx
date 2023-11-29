import { useQuery } from '@tanstack/react-query';
import React from 'react';
import axios from "axios";

const useAllEmployee = () => {
    const {data: users = [], isPending: loading, refetch} = useQuery({
        queryKey: ['users'], 
        queryFn: async() =>{
            const res = await axios.get('https://team-tune-server-ndbqfpznh-mehedi-hasans-hrid.vercel.app/all-employee-list');
            return res.data;
        }
    })

    return [users, loading, refetch]
};

export default useAllEmployee;
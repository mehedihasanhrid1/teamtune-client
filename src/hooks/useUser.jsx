import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import useAuth from './useAuth';

const useUser = () => {
    const { user } = useAuth();
    const {data: data = [], isPending: loading, refetch} = useQuery({
        queryKey: ['data'], 
        queryFn: async() =>{
            const res = await axios.get(
                `https://team-tune-server-ndbqfpznh-mehedi-hasans-hrid.vercel.app/user/${user.email}`
              );
            return res.data;
        }
    })

    return [data, loading, refetch]
};

export default useUser;
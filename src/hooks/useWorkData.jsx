import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import useAuth from './useAuth';

const useWorkData = () => {
    const { user } = useAuth();
    const {data: works = [], isPending: loading, refetch} = useQuery({
        queryKey: ['works'], 
        queryFn: async() =>{
            const res = await axios.get(`https://team-tune-server-ndbqfpznh-mehedi-hasans-hrid.vercel.app/worksheet/${user.email}`);
            return res.data;
        }
    })

    return [works, loading, refetch]
};

export default useWorkData;
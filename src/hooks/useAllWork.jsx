import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from "axios";

const useAllWork = () => {
    const {data: works = [], isPending: loading, refetch} = useQuery({
        queryKey: ['works'], 
        queryFn: async() =>{
            const res = await axios.get('http://localhost:5000/worksheets');
            return res.data;
        }
    })

    return [works, loading, refetch]
};

export default useAllWork;
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";


const useEmployee = () => {
    const { user, loading } = useAuth();
    const { data: isEmployee, isPending: isEmployeeLoading } = useQuery({
        queryKey: [user?.email, 'isEmployee'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`https://team-tune-server-ndbqfpznh-mehedi-hasans-hrid.vercel.app/user/${user.email}`);
            const resData = res.data;
            const isEmployee = resData?.role === 'user';
            return isEmployee;
        }
    })
    return [isEmployee, isEmployeeLoading]
};

export default useEmployee;
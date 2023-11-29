import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";


const useHr = () => {
    const { user, loading } = useAuth();
    const { data: isHr, isPending: isHrLoading } = useQuery({
        queryKey: [user?.email, 'isHr'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`https://team-tune-server-ndbqfpznh-mehedi-hasans-hrid.vercel.app/user/${user.email}`);
            const resData = res.data;
            const isHr = resData?.role === 'hr';
            return isHr;
        }
    })
    return [isHr, isHrLoading]
};

export default useHr;
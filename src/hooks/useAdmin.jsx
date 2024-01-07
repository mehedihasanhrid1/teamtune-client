import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";


const useAdmin = () => {
    const { user, loading } = useAuth();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`https://team-tune-server.vercel.app/user/${user.email}`);
            const resData = res.data;
            const isAdmin = resData?.role === 'admin';
            return isAdmin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;
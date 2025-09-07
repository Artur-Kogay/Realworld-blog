import { useUser } from "@/app/providers";
import { removeToken } from "@/shared"
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
    const navigate = useNavigate()
    const { setUser } = useUser()

    const handleLogout = (): void => {
        removeToken();
        setUser(null)
        navigate('/')
    }

    return { handleLogout };
}
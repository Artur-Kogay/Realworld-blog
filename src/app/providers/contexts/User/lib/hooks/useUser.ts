import { useContext } from "react"
import { UserContext } from "../../userContext/userContext"

export const useUser = () => {
    const context = useContext(UserContext)

    if(!context) {
        throw new Error('no context!!!')
    }

    return context;
}
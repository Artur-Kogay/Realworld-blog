import { Link } from "react-router-dom"
import userLogo from '../../assets/icons/user.svg'
import { useUser } from "@/app/providers"
import type { FC } from "react"


type UserProps = {
    img?: string,
}

const User: FC<UserProps> = ({img}) => {
    const {user} = useUser()

    return (
        <Link to={'/profile'}>
            <img src={img || userLogo} alt="user" />
            {user?.username}
        </Link>
    )
}

export default User
import { useEffect, useState, type FC, type ReactNode } from "react"
import { UserContext } from "../userContext/userContext"
import type { IUser } from "@/entitites"
import { getCurrentUser } from "@/entitites"


type UserProviderProps = {
  children: ReactNode
}

const UserProvider: FC<UserProviderProps> = ({children}) => {
  const [user, setUser] = useState<IUser | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getCurrentUser()
        if (response?.data?.user) {
          setUser(response.data.user)
        }
      } catch (error) {
        console.error("failed get user", error)
        setUser(null)
      }
    }

    fetchUser()
  }, [])

  return (
    <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
  )
}

export default UserProvider;
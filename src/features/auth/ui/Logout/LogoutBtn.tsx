import { NegativeButton } from '@/shared/ui'
import { useLogout } from '../../models'

const LogoutBtn = () => {

  const {handleLogout} = useLogout()

  return (
    <NegativeButton fc={handleLogout}>
        Or click here to logout
    </NegativeButton>
  )
}

export default LogoutBtn
import styles from './ProfileHero.module.scss'
import UserProfile from '@/entitites/User/ui/UserProfile/UserProfile'
import { useUser } from '@/app/providers'

const ProfileHero = () => {

  const {user} = useUser()

  return (
    <section className={styles.hero}>
        <UserProfile urlImage={user?.image} username={user?.username}/>
    </section>
  )
}

export default ProfileHero
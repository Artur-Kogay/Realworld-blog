import styles from './UserProfile.module.scss'
import plugImage from '../../assets/icons/images/plug.png'
import { Like } from '@/shared'
import type { FC } from 'react'

type IUserProfile = {
  urlImage: string,
  username: string
}

const UserProfile: FC<IUserProfile> = ({urlImage, username}) => {
  return (
    <div className={styles.user}>
        <img src={urlImage ? urlImage : plugImage} alt="avatar" />
        <h2 className={styles.username}>{username}</h2>
        <button className={styles.user_btn}>
            <span>
                <Like />
            </span>
            <span>Text</span>
        </button>
    </div>
  )
}

export default UserProfile
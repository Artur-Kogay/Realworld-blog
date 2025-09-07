import { formattedDate } from '@/shared'
import styles from './ArticleUser.module.scss'
import userLogo from './assets/user.svg'
import type { FC } from 'react'
import type { IArticleUser } from './lib'

const ArticleUser: FC<IArticleUser> = ({url, username, createdAt}) => {
  
  return (
    <div className={styles.userInfo}>
        <img src={url ? url : userLogo} alt="user" />
        <div>
            <h4>{username}</h4>
            <span>{createdAt && formattedDate(createdAt)}</span>
        </div>
    </div>
  )
}

export default ArticleUser
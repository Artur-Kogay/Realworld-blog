import { Like } from '@/shared'
import styles from './likeButton.module.scss'
import { type FC } from 'react'
import clsx from 'clsx'

type ILikeButton = {
    fc: (e: React.MouseEvent<HTMLButtonElement>) => void,
    favoritesCount: number,
    isActive: boolean
}

const LikeButton: FC<ILikeButton> = ({fc, favoritesCount, isActive}) => {

    return (
        <button 
        className={clsx(styles['like-btn'], isActive && styles.active)}
        onClick={fc}>
            <Like isActive={isActive}/>
            <span>{favoritesCount}</span>
        </button>
    )
}

export default LikeButton
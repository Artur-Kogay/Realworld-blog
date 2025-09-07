import type { FC, ReactNode } from 'react'
import styles from './PaginationButton.module.scss'
import clsx from 'clsx'


type IPaginationButton = {
    children: ReactNode,
    isActive?: boolean,
    fc?: () => void
}

const PaginationButton: FC<IPaginationButton> = ({children, isActive, fc}) => {
  return (
    <button 
    className={clsx(styles.btn, isActive && styles['active-btn'])}
    onClick={fc}
    >
        {children}
    </button>
  )
}

export default PaginationButton
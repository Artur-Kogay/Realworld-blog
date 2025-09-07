import { type FC, type ReactNode } from 'react'
import styles from './NegativeButton.module.scss'

type INegativeButton = {
    children: ReactNode,
    fc: (e: React.MouseEvent<HTMLButtonElement>) => void
}
const NegativeButton: FC<INegativeButton> = ({children, fc}) => {
  return (
    <button className={styles.btn} onClick={fc}>
        {children}
    </button>
  )
}

export default NegativeButton
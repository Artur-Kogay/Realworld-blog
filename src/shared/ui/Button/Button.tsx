import type { FC, ReactNode } from "react"
import styles from './Button.module.scss'

type IButton = {
    children: ReactNode,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    type?: 'button' | 'reset' | 'submit',
    disabled?: boolean,
}

const Button: FC<IButton> = ({children, type, disabled, onClick}) => {
  return (
    <button 
    className={styles.btn} 
    disabled={disabled} 
    onClick={onClick}
    type={type ? type : 'button'}
    >
        {children}
    </button>
  )
}

export default Button
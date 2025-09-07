import { forwardRef } from 'react'
import styles from './Input.module.scss'
import clsx from 'clsx';

type IInput = {
  type: string;
  placeholder: string;
  isError?: boolean
}

const Input = forwardRef<HTMLInputElement, IInput>(
  ({ type, placeholder, isError, ...rest }, ref) => {
    return (
      <input
        className={clsx(styles.input, isError && styles['input-error'])}
        type={type}
        placeholder={placeholder}
        ref={ref}
        {...rest} 
      />
    )
  }
)

export default Input
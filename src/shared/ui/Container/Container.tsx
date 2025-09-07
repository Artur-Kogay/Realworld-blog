import type { FC } from 'react'
import style from './Container.module.scss'

type IContainer = {
    readonly children: React.ReactNode
}

const Container: FC<IContainer> = ({children}) => {
  return (
    <div className={style.container}>
        {children}
    </div>
  )
}

export default Container
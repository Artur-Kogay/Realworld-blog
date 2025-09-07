import type { FC, ReactNode } from 'react'
import style from './Tag.module.scss'

type ITag = {
    children: ReactNode
}

const Tag: FC<ITag> = ({children}) => {
  return (
    <div className={style.tag}>
        {children}
    </div>
  )
}

export default Tag
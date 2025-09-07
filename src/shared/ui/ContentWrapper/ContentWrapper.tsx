import type { FC, ReactNode } from 'react'
import style from './ContentWrapper.module.scss'

type IContentWrapper = {
    readonly children: ReactNode
}

const ContentWrapper: FC<IContentWrapper> = ({children}) => {
  return (
    <div className={style.wrapper}>
        {children}
    </div>
  )
}

export default ContentWrapper
import type { FC } from 'react'
import style from './ArticlePost.module.scss'

type IArticlePost = {
    title: string,
    description: string
}

const ArticlePost: FC<IArticlePost> = ({title, description}) => {
  return (
    <>
        <h2 className={style.title}>{title}</h2>
        <p className={style.desc}>{description}</p>
    </>
  )
}

export default ArticlePost
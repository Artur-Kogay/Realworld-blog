import type { FC } from 'react'
import style from './ArticlesList.module.scss'
import ArticleCard from '../ArticleCard/ArticleCard'
import type { IArticle } from '@/entitites'
import { Container, Spinner } from '@/shared'

type IArticlesList = {
  articles: IArticle[] | null,
  isLoading: boolean,
  onFavoriteDelete?: (slug: string) => void
  
}

const ArticlesList: FC<IArticlesList> = ({ articles, isLoading, onFavoriteDelete }) => {
  
  return (
    <Container>
      <section className={style['article-list']}>
        {isLoading && <Spinner />}
        {articles && articles.length ? articles.map((item) => {
          return (
            <ArticleCard key={item.slug} {...item} onFavoriteDelete={onFavoriteDelete}/>
          )
        }) : <h2>No articles</h2>}

      </section>
    </Container>
  )
}

export default ArticlesList
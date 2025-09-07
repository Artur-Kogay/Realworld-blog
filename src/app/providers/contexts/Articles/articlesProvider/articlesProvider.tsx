import { useEffect, useState, type FC, type ReactNode } from "react"
import { getAllArticles, type IArticle } from "@/entitites"
import { ArticlesContext } from '../articlesContext/articlesContext'
import { useLoading } from "@/shared"

type IArticlesProvider = {
  children: ReactNode
}

const ArticlesProvider: FC<IArticlesProvider> = ({ children }) => {
  const [articles, setArticles] = useState<IArticle[]>([])
  const [articlesCount, setArticlesCount] = useState<number>(0)
  const { isLoading, startLoading, stopLoading } = useLoading();

  useEffect(() => {
    async function fetchArticles() {
      startLoading();
      try {
        const result = await getAllArticles()
        setArticles(result.data?.articles || [])
        setArticlesCount(result.data?.articlesCount)
      } catch (e) {
        console.error("failed get articles", e)
        setArticles([])
      } finally {
        stopLoading()
      }
    }

    fetchArticles()
  }, [])

  return (
    <ArticlesContext.Provider value={{ articles, setArticles, isLoading, articlesCount }}>
      {children}
    </ArticlesContext.Provider>
  )
}

export default ArticlesProvider
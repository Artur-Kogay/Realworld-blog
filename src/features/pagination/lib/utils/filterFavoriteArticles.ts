import type { IArticle } from "@/entitites"

export const filterFavoriteArticles = (articles: IArticle[]) => {
    return articles.filter(article => article.favorited)
}
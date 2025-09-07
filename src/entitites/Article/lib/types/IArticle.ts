import type { SetStateAction } from "react"

export interface IArticlesContext {
    articles: IArticle[],
    setArticles: React.Dispatch<SetStateAction<IArticle[]>>,
    isLoading: boolean,
    articlesCount: number
}

export interface IArticle {
    author: {
        username: string,
        bio: string,
        following: boolean,
        image: string,
        updated: string
    }
    body: string,
    createdAt: string,
    description: string,
    favorited: boolean,
    favoritesCount: number,
    slug: string,
    tagList: string[],
    title: string,
    updatedAt: string
} 

import { useContext } from "react"
import { ArticlesContext } from "../../articlesContext/articlesContext";

export const useArticles = () => {
    const context = useContext(ArticlesContext)

    if (!context) {
        throw new Error('no context')
    }

    return context;
}

import { apiInstance } from "@/shared"

export const deleteArticle = async (slug: string) => {
    const result = apiInstance.delete(`/articles/${slug}`)
    return result
}
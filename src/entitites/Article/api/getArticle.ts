import { apiInstance } from "@/shared"

export const getArticle = async (slug: string) => {
    const result = await apiInstance.get(`/articles/${slug}`)
    return result;
}
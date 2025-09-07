import { apiInstance } from "@/shared"

export const getArticle = async (slug: string, signal?: AbortSignal) => {
    const result = await apiInstance.get(`/articles/${slug}`, { signal })
    return result;
}
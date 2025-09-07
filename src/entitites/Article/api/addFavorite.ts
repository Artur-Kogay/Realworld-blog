import { apiInstance } from "@/shared"

export const addFavorite = async (slug: string) => {
    const result = await apiInstance.post(`/articles/${slug}/favorite`)
    return result
}
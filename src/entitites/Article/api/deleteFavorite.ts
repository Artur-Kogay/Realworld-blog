import { apiInstance } from "@/shared"

export const deleteFavorite = async (slug: string) => {
    const result = await apiInstance.delete(`/articles/${slug}/favorite`)
    return result
}
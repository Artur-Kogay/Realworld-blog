import { apiInstance } from "@/shared"

export const getAllArticles = async (page: number = 1, limit: number = 3) => {
    const offset = (page - 1) * limit;
    const result = await apiInstance.get('/articles', {
        params: {
            offset: offset,
            limit: limit
        },
    })

    return result;
}
import { apiInstance } from "@/shared"

export const getAllTags = async (signal?: AbortSignal) => {
    const result = await apiInstance.get('/tags', { signal });
    return result;
}
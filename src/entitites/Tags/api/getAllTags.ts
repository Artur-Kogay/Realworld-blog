import { apiInstance } from "@/shared"

export const getAllTags = async () => {
    const result = await apiInstance.get('/tags');
    return result;
}
import { apiInstance } from "@/shared"

export const getCurrentUser = async () => {
    const response = await apiInstance.get('/user')
    return response;
}
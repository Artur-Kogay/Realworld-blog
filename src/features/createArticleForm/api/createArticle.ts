import { apiInstance } from "@/shared"
import type { ICreateArticleForm } from "../models";

export const createArticle = async (formData: ICreateArticleForm) => {
    const response = await apiInstance.post('/articles', { article: formData },)
    return response;
}
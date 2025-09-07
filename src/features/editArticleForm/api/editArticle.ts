import { apiInstance } from "@/shared"
import type { IEditArticleForm } from "../lib";

export const editArticle = async (slug: string, formData: IEditArticleForm) => {
    const response = await apiInstance.put(`/articles/${slug}`, { article: formData },)
    return response;
}
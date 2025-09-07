import { useLoading } from "@/shared"
import { editArticle } from "../../api/editArticle";
import type { IEditArticleForm } from "../../lib";

export const useEditArticle = () => {
    const { isLoading, startLoading, stopLoading } = useLoading();

    const onSubmit = async (slug: string, data: IEditArticleForm) => {
        startLoading()
        try {
            const result = await editArticle(slug, data)
            return result;
        } catch (error) {
            console.error(error)
        } finally {
            stopLoading()
        }
    }

    return { isLoading, onSubmit }
}
import { useLoading } from "@/shared"
import { deleteArticle } from "../../api/deleteArticle"
import { useNavigate } from "react-router-dom"

export const useDeleteArticle = () => {
    const navigate = useNavigate()
    const { isLoading, startLoading, stopLoading } = useLoading()
    const handleDeleteArticle = async (slug: string) => {
        startLoading()
        try {
            await deleteArticle(slug)
            navigate('/')
        } catch (error) {
            console.error(error)
        } finally {
            stopLoading()
        }
    }
    return { isLoading, handleDeleteArticle }
}
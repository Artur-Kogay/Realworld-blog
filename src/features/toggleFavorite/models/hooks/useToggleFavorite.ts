import { addFavorite, deleteFavorite } from "@/entitites"
import { useEffect, useState } from "react"

type IUseToggleFavorite = {
    initialFavorite: boolean,
    initialFavoriteCount?: number,
    slug: string
}

export const useToggleFavorite = ({ initialFavorite, initialFavoriteCount, slug }: IUseToggleFavorite) => {
    const [isFavorite, setIsFavorite] = useState<boolean>(initialFavorite)
    const [areFavoritesCount, setAreFavoritesCount] = useState<number>(initialFavoriteCount || 0)

    useEffect(() => {
        setIsFavorite(initialFavorite)
    }, [initialFavorite])

    const toggleFavorite = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
        try {
            if (isFavorite) {
                await deleteFavorite(slug)
                setIsFavorite(!isFavorite)
                setAreFavoritesCount(prev => prev - 1)
            }
            else {
                await addFavorite(slug)
                setIsFavorite(!isFavorite)
                setAreFavoritesCount(prev => prev + 1)
            }
        } catch (error) {
            console.error(error)
        }
    }

    return { isFavorite, toggleFavorite, areFavoritesCount };
}
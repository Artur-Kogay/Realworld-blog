import { useEffect, useState } from "react";
import { getAllArticles, type IArticle } from "@/entitites";
import { useCountPagination } from './useCountPagination';
import { useLoading } from '@/shared';
import { filterFavoriteArticles } from '../../lib';
import { getPagesCount } from './../../lib/utils/getPagesCount';

export const useFavoritePaginationArticles = () => {
    // Все избранные статьи
    const [allFavorites, setAllFavorites] = useState<IArticle[]>([]);
    // Текущая страница
    const [articles, setArticles] = useState<IArticle[]>([]);
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(3);
    const [totalPages, setTotalPages] = useState<number>(0);

    const { isLoading, startLoading, stopLoading } = useLoading();
    const pagesCountArray = useCountPagination(totalPages);

    useEffect(() => {
        const abort = new AbortController();
        const signal = abort.signal;

        const loadArticles = async () => {
            startLoading();
            try {
                const result = await getAllArticles(1, 1000);
                if (signal.aborted) return;

                const favoriteArticles = filterFavoriteArticles(result.data?.articles || []);
                setAllFavorites(favoriteArticles);

                const total = getPagesCount(favoriteArticles.length, limit);
                setTotalPages(total);

                const start = (page - 1) * limit;
                const paginated = favoriteArticles.slice(start, start + limit);
                setArticles(paginated);

            } catch (error) {
                console.error(error);
            } finally {
                stopLoading();
            }
        };

        loadArticles();
        return () => abort.abort();
    }, [page, limit]);

    return {
        articles,
        setArticles,
        setPage,
        pagesCountArray,
        isLoading,
        page,
        limit,
        setLimit,
        allFavorites
    };
};

import { getPagesCount } from './../../lib/utils/getPagesCount';
import { getAllArticles } from "@/entitites";
import { useEffect, useState } from "react"
import { useCountPagination } from './useCountPagination';
import { useLoading } from '@/shared';

export const usePaginationArticles = () => {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState<number>(3);

    const { isLoading, startLoading, stopLoading } = useLoading()

    const pagesCountArray = useCountPagination(totalPages)


    useEffect(() => {

        const loadArticles = async () => {
            startLoading()
            try {
                const result = await getAllArticles(page, limit);
                setArticles(result.data?.articles)
                setTotalPages(getPagesCount(result.data?.articlesCount, limit))
            } catch (error) {
                if (error) {
                    console.error(error)
                }
            } finally {
                stopLoading()
            }
        }

        loadArticles();
    }, [page, limit])

    return { articles, setPage, pagesCountArray, isLoading, page, setLimit }
}
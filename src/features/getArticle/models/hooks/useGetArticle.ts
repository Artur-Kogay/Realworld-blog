import { useState, useEffect } from 'react';
import { getArticle } from '@/entitites';
import type { IArticle } from '@/entitites';

export const useGetArticle = (slug: string) => {
    const [article, setArticle] = useState<IArticle | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getArticle(slug)
            .then(data => { setArticle(data.data?.article) })
            .catch(e => console.error(e))
            .finally(() => setIsLoading(false));
    }, [slug]);

    return { article, isLoading };
};
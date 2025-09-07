import { useCallback } from "react";
import { useLoading, type IApiError } from '@/shared';
import { createArticle } from "../../api";
import type { ICreateArticleForm } from "../types";


export const useCreateArticle = () => {

    const { isLoading, startLoading, stopLoading } = useLoading();

    const onSubmit = useCallback(async (formData: ICreateArticleForm) => {
        startLoading();

        try {
            const result = await createArticle(formData);
            return result?.data;
        } catch (error: unknown) {
            const err = error as IApiError;

            switch (err?.status) {
                case 422:
                    throw { type: 'server', message: 'Unexpected error' };
                case 401:
                    throw { type: 'server', message: 'Ошибка авторизации' };
                default:
                    throw { type: 'server', message: 'Ошибка сервера, попробуйте позже.' };
            }
        } finally {
            stopLoading();
        }
    }, []);


    return { onSubmit, isLoading };
}
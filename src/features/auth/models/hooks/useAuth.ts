import { useCallback } from "react";
import type { ISignInForm } from '../types';
import { useLoading, type IApiError } from '@/shared';


type AsyncFuncWithData<FormData, Response> = (data: FormData) => Promise<{ data: Response }>;

export const useAuth = () => {

    const { isLoading, startLoading, stopLoading } = useLoading();


    const onSubmit = useCallback(
        async <FormData, Response>(
            formData: FormData,
            fc: AsyncFuncWithData<FormData, Response>
        ) => {
            startLoading();
            try {
                const result = await fc(formData);
                return result.data;
            } catch (error: unknown) {
                const err = error as IApiError;
                switch (err?.status) {
                    case 422:
                        throw { type: 'server', message: 'Неправильное имя пользователя или пароль.' };
                    case 401:
                        throw { type: 'server', message: 'Ошибка авторизации' };
                    default:
                        throw { type: 'server', message: 'Ошибка сервера, попробуйте позже.' };
                }
            } finally {
                stopLoading();
            }
        },
        []
    );


    return { onSubmit, isLoading };
}
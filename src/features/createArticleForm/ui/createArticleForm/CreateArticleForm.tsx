import { Button, Input, type IApiError } from '@/shared'
import styles from './CreateArticleForm.module.scss'
import { useForm, type SubmitHandler } from 'react-hook-form'
import type { ICreateArticleForm } from '../../models'
import { useCreateArticle } from '../../models'
import { useState } from 'react'
import { formattedTags } from '../../lib'
import { useArticles } from '@/app/providers/contexts'

const SettingsProfileForm = () => {

    const [successMessage, setSuccessMessage] = useState<null | string>(null);
    const {setArticles} = useArticles()

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        reset,
        clearErrors
    } = useForm<ICreateArticleForm>({
        defaultValues: {
            title: '',
            description: '',
            body: '',
            tagList: []
        },
        mode: 'onBlur'
    })

    const { isLoading, onSubmit } = useCreateArticle();

    const handleDataSubmit: SubmitHandler<ICreateArticleForm> = async (data): Promise<void> => {
        try {

            const formattedData = {...data, tagList: formattedTags(data?.tagList) ?? []}

            const result = await onSubmit(formattedData);

            reset()
            
            setArticles(prev => [...prev, {...result.article}])

        } catch (error) {
            setError('serverError', error as IApiError);
        }
    }

    const changeInput = (): void => {
        clearErrors()
        setSuccessMessage(null)
    }

    return (
        <>
            {successMessage && <h2 className={styles['success']}>{successMessage}</h2>}
            {errors.serverError?.message && <h2 className={styles['error-message']}>{errors.serverError?.message}</h2>}
            <form className={styles.form} onSubmit={handleSubmit(handleDataSubmit)}>
                <Input
                    type='text'
                    placeholder='Title'
                    isError={!!errors.title}
                    {...register('title', {
                        onChange: () => clearErrors(),
                        required: 'Title должен быть заполнен!',
                        minLength: {
                            value: 3,
                            message: 'Title должно быть не меньше 3 символов!'
                        },
                    })}
                />
                {errors.title && <p className={styles['error-message']}>{errors.title.message}</p>}
                <Input
                    type='text'
                    placeholder='Description'
                    isError={!!errors.description}
                    {...register('description', {
                        onChange: () => clearErrors(),
                        required: 'Description должен быть заполнен!',
                        minLength: {
                            value: 3,
                            message: 'Description должно быть не меньше 3 символов!'
                        },
                    })}
                />
                {errors.description && <p className={styles['error-message']}>{errors.description.message}</p>}
                <Input
                    type='text'
                    placeholder='Body text'
                    {...register('body', {
                        onChange: () => changeInput(),
                        required: 'Body должен быть заполнен!',
                        minLength: {
                            value: 3,
                            message: 'Body text должно быть не меньше 3 символов!'
                        },
                    })}
                />
                {errors.body && <p className={styles['error-message']}>{errors.body.message}</p>}
                <Input
                    type='text'
                    placeholder='Напишите названия тегов через пробел'
                    {...register('tagList', {
                        onChange: () => changeInput(),
                        required: 'TagList должен быть заполнен!',
                        minLength: {
                            value: 1,
                            message: 'Body text должно быть не меньше 1 символа!'
                        },
                    })}
                />
                {errors.tagList && <p className={styles['error-message']}>{errors.tagList.message}</p>}

                <Button type='submit' disabled={isLoading}>Create article</Button>
            </form>
        </>
    )
}

export default SettingsProfileForm
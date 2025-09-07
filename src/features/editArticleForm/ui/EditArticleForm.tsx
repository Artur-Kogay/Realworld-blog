import { Button, Input, type IApiError } from '@/shared'
import styles from './EditArticleForm.module.scss'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useState } from 'react'
import { useEditArticle } from '../models'
import type { IEditArticleForm } from '../lib'
import { useParams } from 'react-router-dom'

const EditArticleForm = () => {

    const [successMessage, setSuccessMessage] = useState<null | string>(null);
    const {slug} = useParams<{slug: string}>()

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        reset,
        clearErrors
    } = useForm<IEditArticleForm>({
        defaultValues: {
            title: '',
            description: '',
            body: '',
        },
        mode: 'onBlur'
    })

    const { isLoading, onSubmit } = useEditArticle();

    const handleDataSubmit: SubmitHandler<IEditArticleForm> = async (data): Promise<void> => {
        try {
            if(!slug) return;
            await onSubmit(slug, data);

            reset()
            
            setSuccessMessage('The article has been successfully changed')

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
                        minLength: {
                            value: 3,
                            message: 'Body text должно быть не меньше 3 символов!'
                        },
                    })}
                />
                {errors.body && <p className={styles['error-message']}>{errors.body.message}</p>}

                <Button type='submit' disabled={isLoading}>Edit article</Button>
            </form>
        </>
    )
}

export default EditArticleForm
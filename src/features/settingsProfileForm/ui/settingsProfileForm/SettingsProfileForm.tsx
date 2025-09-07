import { Button, Input, saveToken, type IApiError } from '@/shared'
import styles from './SettingsProfileForm.module.scss'
import { useForm, type SubmitHandler } from 'react-hook-form'
import type { IUpdateProfileForm } from '../../models'
import { useUpdateProfile } from '../../models/hooks/useUpdateProfile'
import { useUser } from '@/app/providers'
import { useState } from 'react'

const SettingsProfileForm = () => {

    const { setUser } = useUser()
    const [successMessage, setSuccessMessage] = useState<null | string>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        reset,
        clearErrors
    } = useForm<IUpdateProfileForm>({
        defaultValues: {
            username: '',
            email: '',
            bio: '',
            image: ''
        },
        mode: 'onBlur'
    })

    const { isLoading, onSubmit } = useUpdateProfile();

    const handleDataSubmit: SubmitHandler<IUpdateProfileForm> = async (data): Promise<void> => {
        try {

            const result = await onSubmit(data);
            const token = result?.user?.token;

            if (token) {
                saveToken(token)
            }

            setUser(result?.user)
            setSuccessMessage("User data updated successfully")
            reset()

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
                    placeholder='Username'
                    isError={!!errors.username}
                    {...register('username', {
                        onChange: () => clearErrors(),

                        minLength: {
                            value: 3,
                            message: 'Имя пользователя должно быть не меньше 3 символов!'
                        },
                        maxLength: {
                            value: 20,
                            message: 'Имя пользователя должно быть не больше 20 символов!'
                        }
                    })}
                />
                {errors.username && <p className={styles['error-message']}>{errors.username.message}</p>}
                <Input
                    type='email'
                    placeholder='Email'
                    isError={!!errors.email}
                    {...register('email', {
                        onChange: () => changeInput(),
                        required: "Поле email является обязательным",
                        validate: (value) => !value || /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/.test(value) || 'это не email'
                    })}
                />
                {errors.email && <p className={styles['error-message']}>{errors.email.message}</p>}
                <Input
                    type='text'
                    placeholder='Your comment'
                    {...register('bio', {
                        onChange: () => changeInput(),

                        minLength: {
                            value: 3,
                            message: 'Био пользователя должно быть не меньше 3 символов!'
                        },
                    })}
                />
                {errors.bio && <p className={styles['error-message']}>{errors.bio.message}</p>}

                <Input
                    type='text'
                    placeholder='Avatar image (URL)'
                    {...register('image', {
                        onChange: () => changeInput(),
                    })}
                />

                <Button type='submit' disabled={isLoading}>Update settings</Button>
            </form>
        </>
    )
}

export default SettingsProfileForm
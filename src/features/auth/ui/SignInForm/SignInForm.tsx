import { Button, Input, saveToken, type IApiError } from '@/shared';
import styles from './SignInForm.module.scss';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import type { ISignInForm } from '@/features/auth/models/types';
import { useUser } from '@/app/providers';
import { useAuth } from '@/features/auth/models';
import { signIn } from '../../api';

const SignInForm = () => {
  const { setUser } = useUser();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
    clearErrors,
  } = useForm<ISignInForm>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
  });

  const { isLoading, onSubmit } = useAuth();

  const handleDataSubmit: SubmitHandler<ISignInForm> = async (
    data,
  ): Promise<void> => {
    try {
      const result = await onSubmit(data, signIn);
      const token = result?.user?.token;

      if (token) {
        saveToken(token);
      }

      reset();

      setUser(result?.user);

      navigate('/');
    } catch (error) {
      setError('serverError', error as IApiError);
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(handleDataSubmit)}>
        {errors.serverError && (
          <p className={styles['error-message']}>
            {String(errors.serverError.message)}
          </p>
        )}
        <Input
          type="email"
          placeholder="Email"
          isError={errors.email && true}
          {...register('email', {
            required: 'Поле Email не заполнено',
            onChange: () => {
              clearErrors();
            },
            validate: (value) =>
              /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/.test(
                value,
              ) || 'это не email',
          })}
        />
        {errors.email && (
          <p className={styles['error-message']}>{errors.email.message}</p>
        )}
        <Input
          type="password"
          placeholder="Password"
          isError={errors.password && true}
          {...register('password', {
            required: 'Поле Password не заполнено',
            onChange: () => clearErrors(),
            minLength: {
              value: 6,
              message: 'Пароль должен быть от 6 до 40 символов!',
            },
            maxLength: {
              value: 40,
              message: 'Пароль должен быть от 6 до 40 символов!',
            },
          })}
        />
        {errors.password && (
          <p className={styles['error-message']}>{errors.password.message}</p>
        )}
        <Button disabled={isLoading} type="submit">
          Sign In
        </Button>
      </form>
    </>
  );
};

export default SignInForm;

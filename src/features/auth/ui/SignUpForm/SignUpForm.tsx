import { Button, Input, saveToken, type IApiError } from '@/shared';
import styles from './SignUpForm.module.scss';
import type { ISignUpForm } from '../../models/types';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../models';
import { useUser } from '@/app/providers';
import { signUp } from '../../api';

const SignUpForm = () => {
  const navigate = useNavigate();

  const { setUser } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
    reset,
    clearErrors,
  } = useForm<ISignUpForm>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
      checkbox: false,
    },
    mode: 'onBlur',
  });

  const { isLoading, onSubmit } = useAuth();

  const handleDataSubmit: SubmitHandler<ISignUpForm> = async (
    data,
  ): Promise<void> => {
    try {
      const result = await onSubmit(data, signUp);
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
      {errors.serverError?.message && (
        <h2 className={styles['error-message']}>
          {String(errors.serverError?.message)}
        </h2>
      )}
      <form className={styles.form} onSubmit={handleSubmit(handleDataSubmit)}>
        <Input
          type="text"
          placeholder="Username"
          isError={!!errors.username}
          {...register('username', {
            required: 'Поле User не заполнено',
            onChange: () => clearErrors(),
            minLength: {
              value: 3,
              message: 'Имя пользователя должно быть не меньше 3 символов!',
            },
            maxLength: {
              value: 20,
              message: 'Имя пользователя должно быть не больше 20 символов!',
            },
          })}
        />
        {errors.username && (
          <p className={styles['error-message']}>{errors.username.message}</p>
        )}
        <Input
          type="email"
          placeholder="Email"
          isError={errors.email && true}
          {...register('email', {
            required: 'Поле Email не заполнено',
            onChange: () => clearErrors(),
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
        <Input
          type="password"
          placeholder="Repeat Password"
          isError={errors.repeatPassword && true}
          {...register('repeatPassword', {
            required: true,
            onChange: () => clearErrors(),
            validate: (value) =>
              value === watch('password') || 'Пароли не совпадают',
          })}
        />
        {errors.repeatPassword && (
          <p className={styles['error-message']}>
            {errors.repeatPassword.message}
          </p>
        )}
        <label>
          <input
            type="checkbox"
            {...register('checkbox', {
              required: 'Дай согласие на обработку данных',
              onChange: () => clearErrors(),
            })}
          />
          дать согласие на обработку персональних данных
        </label>
        {errors.checkbox && (
          <p className={styles['error-message']}>{errors.checkbox.message}</p>
        )}
        <Button disabled={isLoading} type="submit">
          Sign Up
        </Button>
      </form>
    </>
  );
};

export default SignUpForm;

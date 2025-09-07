import { SignInForm } from '@/features'
import styles from './SignInWidget.module.scss'

const SignInWidget = () => {
  return (
    <section className={styles['sign-in-content']}>
        <h1 className={styles.title}>Sign In</h1>
        <SignInForm />
    </section>
  )
}

export default SignInWidget
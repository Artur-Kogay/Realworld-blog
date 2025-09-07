import { SignUpForm } from '@/features'
import styles from './SignUpWidget.module.scss'

const SignUpWidget = () => {
  return (
    <section className={styles['sign-up-content']}>
        <h1 className={styles.title}>Sign Up</h1>
        <SignUpForm />
    </section>
  )
}

export default SignUpWidget
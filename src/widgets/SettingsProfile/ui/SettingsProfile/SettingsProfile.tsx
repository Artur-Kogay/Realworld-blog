import { LogoutBtn, SettingsProfileForm } from '@/features'
import styles from './SettingsProfile.module.scss'

const SettingsProfile = () => {
  return (
    <section className={styles['settings-content']}>
        <h1 className={styles.title}>Your Settings</h1>
        <SettingsProfileForm />
        <LogoutBtn />
    </section>
  )
}

export default SettingsProfile
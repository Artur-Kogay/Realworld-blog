import styles from './Spinner.module.scss'
import spinnerIcon from './assets/refresh.svg'

const Spinner = () => {
  return (
    <div className={styles.spinner}>
        <img src={spinnerIcon} alt="spinner" />
        <h2>loading</h2>
    </div>
  )
}

export default Spinner
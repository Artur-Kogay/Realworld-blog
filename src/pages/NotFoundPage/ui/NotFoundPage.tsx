import styles from './NotFoundPage.module.scss'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className={styles['error-page']}>
        <h1>Error 404</h1>
        <h2>Page Not Found</h2>
        <Link to={'/'} className={styles.btn}>Go back</Link>
    </div>
  )
}

export default NotFoundPage
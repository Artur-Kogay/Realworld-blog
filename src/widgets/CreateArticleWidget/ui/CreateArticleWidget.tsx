import { CreateArticleForm } from '@/features/createArticleForm'
import styles from './CreateArticleWidget.module.scss'

const CreateArticleWidget = () => {
  return (
    <section className={styles['create-article-content']}>
        <h1 className={styles.title}>Create article</h1>
        <CreateArticleForm />
    </section>
  )
}

export default CreateArticleWidget
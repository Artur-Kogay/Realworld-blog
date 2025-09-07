import { EditArticleForm } from '@/features'
import styles from './EditArticleWidget.module.scss'
import { NegativeButton } from '@/shared/ui'
import { useState } from 'react'
import { useDeleteArticle } from '@/features'
import { Modal } from '@/widgets/Modal'
import { useParams } from 'react-router-dom'

const EditArticleWidget = () => {

    const [isModalActive, setIsModalActive] = useState<boolean>(false)
    const {handleDeleteArticle} = useDeleteArticle()

    const {slug} = useParams<{slug: string}>()

    const handleModal = () => {
        setIsModalActive(!isModalActive)
    }

    const handleDelete = async(e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        try {
            if(!slug) return
            await handleDeleteArticle(slug)
            handleModal()
        } catch (error) {
            console.error(error)
        }

        
    }

  return (
    <>
    <section className={styles['edit-content']}>
        <h1 className={styles.title}>Edit Article</h1>
        <EditArticleForm />
        <NegativeButton fc={handleModal}>Delete this article</NegativeButton>
    </section>
    {
        isModalActive && <Modal toggleActive={handleModal} fc={(e) => handleDelete(e)}/>
    }
    </>
  )
}

export default EditArticleWidget
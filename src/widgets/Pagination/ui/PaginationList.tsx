import { Container, PaginationButton } from '@/shared'
import styles from './PaginationList.module.scss'
import type { FC } from 'react'


type IPaginationList = {
    paginationCount: number[],
    page: number,
    fc: (page: number) => void
}

const PaginationList: FC<IPaginationList> = ({paginationCount, page, fc}) => {
    return (
        <Container>
        <section className={styles.pagination}>
            {
                paginationCount.map(p => (
                    <PaginationButton 
                    key={p}
                    isActive={p === page} 
                    fc={() => fc(p)}
                    >
                        {p}
                    </PaginationButton>
                ))
            }
        </section>
        </Container>
    )
}

export default PaginationList
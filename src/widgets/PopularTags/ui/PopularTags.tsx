import { Container, ContentWrapper } from '@/shared'
import style from './PopularTags.module.scss'
import { TagList } from '@/shared'
import { filteredTags } from '@/features'
import type { FC } from 'react'

type IPopularTags = {
    tags: string[]
}

const PopularTags: FC<IPopularTags> = ({ tags }) => {

    const isFilteredTags = filteredTags(tags)

    return (
        <section className={style['popular-tags']}>
            <Container>
                <ContentWrapper>
                    <h2 className={style.title}>Popular tags</h2>
                    <TagList tags={isFilteredTags} />
                </ContentWrapper>
            </Container>
        </section>
    )
}

export default PopularTags
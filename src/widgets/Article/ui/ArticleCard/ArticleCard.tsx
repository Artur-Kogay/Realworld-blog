import styles from './ArticleCard.module.scss';
import { ContentWrapper, TagList } from '@/shared';
import { ArticlePost, ArticleUser } from '@/entitites';
import { LikeButton, useToggleFavorite } from '@/features';
import { type FC } from 'react';
import type { ArticleWithProps } from '../../lib';
import { useNavigate } from 'react-router-dom';

interface ArticleCardProps extends ArticleWithProps {
  onFavoriteDelete?: (slug: string) => void
}

const ArticleCard: FC<ArticleCardProps> = (props) => {

  const {onFavoriteDelete, author, title, body, createdAt, favoritesCount, favorited, tagList, slug } = props;

  const { areFavoritesCount, isFavorite, toggleFavorite } = useToggleFavorite({
    initialFavorite: favorited,
    initialFavoriteCount: favoritesCount,
    slug: slug
  })

  const navigate = useNavigate()

  const handleToggleFavorite = async(e: React.MouseEvent<HTMLButtonElement>) => {
    await toggleFavorite(e)
    
    if(onFavoriteDelete) {
      onFavoriteDelete(slug)
    }
  }

  return (
    <div className={styles['article-card']} onClick={() => navigate(`/articles/${slug}`)}>
      <ContentWrapper>
        <header className={styles['article-card_header']}>
          <ArticleUser
            url={author?.image}
            username={author?.username}
            createdAt={createdAt}
          />
          <LikeButton
            isActive={isFavorite}
            fc={handleToggleFavorite}
            favoritesCount={areFavoritesCount} />
        </header>
        <div className={styles['article-card_content']}>
          <ArticlePost
            title={title}
            description={body}
          />
          {tagList && <TagList tags={tagList} />}
        </div>
      </ContentWrapper>
    </div>
  )
}

export default ArticleCard
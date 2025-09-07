import { useNavigate, useParams } from 'react-router-dom';
import styles from './ArticlePageWIdget.module.scss';
import { useGetArticle, useToggleFavorite } from '@/features';
import { Button, Container, Spinner, TagList } from '@/shared';
import { ArticleUser } from '@/entitites';

const ArticlePageWidget = () => {
  const { slug } = useParams<{ slug: string }>();

  const { article, isLoading } = useGetArticle(slug || '');

  const navigate = useNavigate();

  const { toggleFavorite, isFavorite } = useToggleFavorite({
    initialFavorite: !!article?.favorited,
    slug: slug ? slug : '',
  });

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <section className={styles.article}>
          <div className={styles.article_hero}>
            <Container>
              <div className={styles.hero_content}>
                <h1 className={styles.article_title}>{article?.title}</h1>
                <ArticleUser
                  username={article?.author.username ?? ''}
                  url={article?.author.image ?? ''}
                  createdAt={article?.createdAt ?? ''}
                />
                <Button onClick={() => navigate(`/articles/${slug}/edit`)}>
                  Edit article
                </Button>
              </div>
            </Container>
          </div>
          <Container>
            <div className={styles.article_content}>
              <p className={styles.article_description}>{article?.body}</p>
              <TagList tags={article?.tagList ?? []} />
              <div className={styles.article_meta}>
                <ArticleUser
                  username={article?.author.username ?? ''}
                  url={article?.author.image ?? ''}
                  createdAt={article?.createdAt ?? ''}
                />
                <Button onClick={(e) => toggleFavorite(e)}>
                  {isFavorite ? 'Unfavorite article' : 'Favorite article'}
                </Button>
              </div>
            </div>
          </Container>
        </section>
      )}
    </>
  );
};

export default ArticlePageWidget;

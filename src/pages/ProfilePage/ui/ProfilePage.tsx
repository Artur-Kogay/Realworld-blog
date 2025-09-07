import { ArticlesList, PaginationList, PopularTags, ProfileHero } from '@/widgets'
import { Container } from '@/shared'
import { useGetAllTags } from '@/features';
import { useFavoritePaginationArticles } from '@/features';

const ProfilePage = () => {
  const { articles, setArticles, isLoading, setPage, page, pagesCountArray } = useFavoritePaginationArticles();
  const { tags } = useGetAllTags()

    const onFavoriteDelete = (slug: string) => {
        setArticles(prev => prev.filter(article => article.slug !== slug));
    };

  return (
    <div>
      <ProfileHero />
      <Container>
        <PopularTags tags={tags} />
        <ArticlesList onFavoriteDelete={onFavoriteDelete} articles={articles} isLoading={isLoading} />
        <PaginationList paginationCount={pagesCountArray} page={page} fc={setPage} />
      </Container>
    </div>
  )
}

export default ProfilePage
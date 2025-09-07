import { useGetAllTags } from '@/features';
import { usePaginationArticles } from '@/features/pagination';
import {PaginationList, PopularTags } from '@/widgets';
import {Hero} from '@/widgets';
import {ArticlesList} from '@/widgets';

const HomePage = () => {
  const {articles, isLoading, pagesCountArray, setPage, page} = usePaginationArticles();
  const {tags} = useGetAllTags()

  return (
    <>
      <Hero />
      <PopularTags tags={tags}/>
      <ArticlesList articles={articles} isLoading={isLoading}/>
      <PaginationList paginationCount={pagesCountArray} page={page}  fc={setPage}/>
    </>
  )
}

export default HomePage;


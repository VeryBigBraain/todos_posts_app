import { useEffect, useRef, useState } from 'react';
import { useFetching } from './../../../hooks/useFetching';
import { getPagesCount } from '../../../utils/pages.js';
import { useObserver } from './../../../hooks/useObserver';
import { useSortedPosts } from './../../../hooks/useItems';
import { itemsAPI } from './../../../API/serviceAPI';
import PostsPage from './PostsPage';

const PostsPageContainer = () => {
  const [posts, setPosts] = useState([]);
  const [sortVal, setSortVal] = useState('id');
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const sortedPosts = useSortedPosts(posts, sortVal);
  const lastElement = useRef();
  
  const [fetchPosts, isPostsLoading, postsError] = useFetching(
    async (limit, page) => {
      const response = await itemsAPI.getAllItems('posts', limit, page);
      setPosts([...posts, ...response.data]);
      const totalCount = response.headers['x-total-count'];
      setTotalPages(getPagesCount(totalCount, limit));
    }
  );

  useObserver(lastElement, page < totalPages, isPostsLoading, () =>
    setPage(page + 1)
  );

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page]);

  return (
    <PostsPage
      sortVal={sortVal}
      setSortVal={setSortVal}
      postsError={postsError}
      isPostsLoading={isPostsLoading}
      sortedPosts={sortedPosts}
      lastElement={lastElement}
      posts={posts}
      limit={limit}
     />
  );
};

export default PostsPageContainer;

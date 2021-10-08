import { useEffect, useRef, useContext } from 'react';
import { useFetching } from './../../../hooks/useFetching';
import { getPagesCount } from '../../../utils/pages.js';
import { useObserver } from './../../../hooks/useObserver';
import { useSortedPosts } from './../../../hooks/useItems';
import { itemsAPI } from './../../../API/serviceAPI';
import { postContext } from './../../../context';
import PostsPage from './PostsPage';
import { 
  setPostsAC, 
  setSortValAC, 
  setPostsPortionAC,
  setTotalPagesAC,
  setLimitAC,
  setPageAC,
} from './../../../reducers/post-reducer';
import {
  getPosts,
  getSortVal,
  getPostsPortion,
  getTotalPages,
  getLimit,
  getPage
} from './../../../selectors/post-selector';

const PostsPageContainer = () => {
  const [state, dispatch] = useContext(postContext);

  const posts = getPosts(state);
  const sortVal = getSortVal(state);
  const postsPortion = getPostsPortion(state);
  const totalPages = getTotalPages(state);
  const limit = getLimit(state);
  const page = getPage(state);

  const setPosts = (posts) => dispatch(setPostsAC(posts));
  const setSortVal = (sortVal) => dispatch(setSortValAC(sortVal));
  const setPostsPortion = (postsPortion) => dispatch(setPostsPortionAC(postsPortion));
  const setTotalPages = (postsPortion) => dispatch(setTotalPagesAC(postsPortion));
  const setLimit = (limit) => dispatch(setLimitAC(limit));
  const setPage = (page) => dispatch(setPageAC(page));

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
  }, [page, limit]);

  const onPostsPortionChange = (count) => {
    setPostsPortion(count);
    setLimit(count);
  };

  return (
    <PostsPage
    sortVal={sortVal}
    setSortVal={setSortVal}
    postsPortion={postsPortion}
    onPostsPortionChange={onPostsPortionChange}
    postsError={postsError}
    isPostsLoading={isPostsLoading}
    sortedPosts={sortedPosts}
    lastElement={lastElement}
    posts={posts}
     />
  );
};

export default PostsPageContainer;
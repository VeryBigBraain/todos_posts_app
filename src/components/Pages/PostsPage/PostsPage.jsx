import { useState, useEffect, useRef } from 'react';
import { useFetching } from './../../../hooks/useFetching';
import cl from './PostsPage.module.css';
import Loader from './../../UI/Loader/Loader';
import { getPagesCount } from '../../../utils/pages.js';
import { useObserver } from './../../../hooks/useObserver';
import ItemsList from './../../common/ItemsList/ItemsList';
import PostItem from './PostItem/PostItem';
import FilterPosts from './FilterPosts/FilterPosts';
import { useSortedPosts } from './../../../hooks/useItems';
import { itemsAPI } from './../../../API/serviceAPI';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [sortVal, setSortVal] = useState('id');
  const [postsPortion, setPostsPortion] = useState('5');
  const sortedPosts = useSortedPosts(posts, sortVal);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
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
  }
  
  return (
    <div className={cl.posts__page}>
      <div className={cl.form__header}>
        <h2 className={cl.form__title}>Posts</h2>
        <div className={cl.filter__container}>
          <FilterPosts
            sortVal={sortVal}
            setSortVal={setSortVal}
            postsPortion={postsPortion}
            setPostsPortion={onPostsPortionChange}
          />
        </div>
      </div>
      {postsError && <h1>Some error</h1>}
      {isPostsLoading && <Loader width="50"/>}
      <div className={cl.posts__container}>
        <ItemsList
          items={sortedPosts}
          isListLoading={isPostsLoading}
          Component={PostItem}
          itemsName="posts"
        />
      </div>
      <div className={cl.observer} ref={lastElement}></div>
      {!!posts.length && isPostsLoading && <Loader />}
    </div>
  );
};

export default PostsPage;

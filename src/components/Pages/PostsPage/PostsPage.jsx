import { useState, useEffect, useRef } from 'react';
import PostsList from './PostsList/PostsList';
import TodosService from './../../../API/TodosService';
import { useFetching } from './../../../hooks/useFetching';
import cl from './PostsPage.module.css';
import Loader from './../../UI/Loader/Loader';
import { getPagesCount } from '../../../utils/pages.js';
import Pagination from './../../UI/pagination/Pagination';
import { useObserver } from './../../../hooks/useObserver';
import MySelect from './../../UI/select/MySelect';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef();
  const [fetchPosts, isPostsLoading, postsError] = useFetching(
    async (limit, page) => {
      const response = await TodosService.getAllPosts(limit, page);
      setPosts([...posts, ...response.data]);
      const totalCount = response.headers['x-total-count'];
      setTotalPages(getPagesCount(totalCount, limit));
    }
  );

  useObserver(lastElement, page < totalPages, isPostsLoading, () => setPage(page + 1));

  const changePage = (page) => {
    setPage(page);
  };

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  return (
    <div className={cl.postsPage}>
      <h2 className={cl.formHeader}>News</h2>
      <MySelect
        value={limit}
        callback={setLimit}
        defaultValue="Count of posts on page"
        options={[
          {value: 5, name: '5'},
          {value: 10, name: '10'},
          {value: 25, name: '25'},
          {value: -1, name: 'All'},
        ]}
      />
      {postsError && <h1>Some error</h1>}
      {isPostsLoading && <Loader />}
      <PostsList posts={posts} />
      <div ref={lastElement} style={{ height: 20 }}></div>
      <Pagination totalPages={totalPages} page={page} changePage={changePage} />
    </div>
  );
};

export default PostsPage;

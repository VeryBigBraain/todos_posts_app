import cl from './PostsPage.module.css';
import Loader from './../../UI/Loader/Loader';
import ItemsList from './../../common/ItemsList/ItemsList';
import PostItem from './PostItem/PostItem';
import FilterPosts from './FilterPosts/FilterPosts';

const PostsPage = ({
  sortVal,
  setSortVal,
  limit,
  setLimit,
  postsError,
  isPostsLoading,
  sortedPosts,
  lastElement,
  posts
}) => {
  return (
    <div className={cl.posts__page}>
      <div className={cl.form__header}>
        <h2 className={cl.form__title}>Posts</h2>
        <div className={cl.filter__container}>
          <FilterPosts
            sortVal={sortVal}
            setSortVal={setSortVal}
            limit={limit}
          />
        </div>
      </div>
      {postsError && <h1>Some error</h1>}
      {isPostsLoading && <Loader width="50" />}
      <div className={cl.posts__container}>
        <ItemsList
          items={sortedPosts}
          isListLoading={isPostsLoading}
          Component={PostItem}
          itemsName="posts"
        />
      </div>
      <div className={cl.observer} ref={lastElement}></div>
      {!!posts.length && isPostsLoading && <Loader width={50} />}
    </div>
  );
};

export default PostsPage;

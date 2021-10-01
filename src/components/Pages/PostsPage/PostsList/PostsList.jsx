import cl from './PostsList.module.css';
import PostItem from './PostItem/PostItem';

const PostsList = ({ posts }) => {
  if (!posts.length) {
    return <div className={cl.noPosts}>There is no todos!</div>;
  }

  return (
    <div className={cl.posts}>
      {posts.map((post, index) => (
        <PostItem key={post.id} post={post} index={index} />
      ))}
    </div>
  );
};

export default PostsList;

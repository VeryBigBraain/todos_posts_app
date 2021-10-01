import cl from './PostItem.module.css';
import MyButton from './../../../../UI/buttons/MyButton';
import {useHistory} from 'react-router-dom';

const PostItem = ({ post, index }) => {
  const router = useHistory();
  return (
    <div key={post.id} className={cl.post}>
      <div className={cl.postHeader}>
        <span className={cl.postNumber}>{post.id}</span>
        <div className={cl.postTitle}>{post.title}</div>
      </div>
      <div className={cl.postBody}>{post.body}</div>
      <MyButton onClick={() => router.push(`/posts/${post.id}`)}>Open</MyButton>
    </div>
  );
};

export default PostItem;
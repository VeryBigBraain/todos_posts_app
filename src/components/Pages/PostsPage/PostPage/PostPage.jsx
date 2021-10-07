import cl from './PostPage.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFetching } from './../../../../hooks/useFetching';
import Loader from './../../../UI/Loader/Loader';
import MyButton from './../../../UI/buttons/MyButton';
import { useHistory } from 'react-router-dom';
import CommentsList from './CommentsList/CommentsList';
import { postAPI } from './../../../../API/serviceAPI';

const PostPage = () => {
  const router = useHistory();
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await postAPI.getPostById(id);
    setPost(response);
  });
  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const response = await postAPI.getComments(id);
    setComments(response);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);
  return (
    <div className={cl.post__page}>
      <div className={cl.post}>
        <h1 className={cl.post__header}>Post {params.id}</h1>
        {isLoading ? (
          <Loader width="50"/>
        ) : (
          <div className={cl.post__content}>
            <div className={cl.post__title}>{post.title}</div>
            <div className={cl.post__body}>{post.body}</div>
          </div>
        )}
        <h2 className={cl.comments__header}>Comments</h2>
        <CommentsList comments={comments} isComLoading={isComLoading} />
        <MyButton onClick={() => router.goBack()} variant="contained">
          Back
        </MyButton>
      </div>
    </div>
  );
};

export default PostPage;

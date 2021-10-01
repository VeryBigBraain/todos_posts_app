import cl from './PostPage.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFetching } from './../../../../hooks/useFetching';
import TodosService from './../../../../API/TodosService';
import Loader from './../../../UI/Loader/Loader';

const PostPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await TodosService.getPostById(id);
    setPost(response);
  });
  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const response = await TodosService.getComments(id);
    setComments(response);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);

  return (
    <div>
      <h1>Post {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
      <h2>Comments</h2>
      {isComLoading
        ? <Loader />
        : <div>
            {comments.map((com, index) => 
              <div key={index}>
                <h5>{com.email}</h5>
                <div>{com.body}</div>
              </div>
            )}
          </div>
      }
    </div>
  );
};

export default PostPage;

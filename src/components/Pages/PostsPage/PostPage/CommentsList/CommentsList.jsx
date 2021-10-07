import cl from './CommentsList.module.css';
import Loader from './../../../../UI/Loader/Loader';


const CommentsList = ({ comments, isComLoading }) => {
  return (
    <div className={cl.comments__container}>
      {isComLoading 
        ? <Loader width="50"/>
        : <div className={cl.comments}>
          {comments.map((com, index) => (
            <div className={cl.comment} key={index}>
              <h5>{com.email}</h5>
              <div className={cl.comment__body}>{com.body}</div>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default CommentsList;

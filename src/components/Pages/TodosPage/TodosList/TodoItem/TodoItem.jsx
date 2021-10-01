import cl from './TodoItem.module.css';
import MyButton from './../../../../UI/buttons/MyButton';

const TodoItem = ({ todo, index, toggleCompleteTodo, deleteTodo }) => {
  return (
    <div key={todo.id} className={cl.todo}>
      <div className={cl.todoHeader}>{index + 1}</div>
      <div
        className={`${todo.completed && cl.completed} ${
          cl.todoBody
        }`}
      >
        <span className={cl.todoContent}>{todo.title}</span>
        <span className={cl.buttons}>
          <MyButton
            className={cl.completeBtn}
            args={[todo.id]}
            callback={(e) => toggleCompleteTodo(e, todo.id)}
          >
            Complete
          </MyButton>
          <MyButton
            className={cl.deleteBtn}
            args={[todo.id]}
            callback={(e) => deleteTodo(e, todo.id)}
          >
            Delete
          </MyButton>
        </span>
      </div>
    </div>
  );
};

export default TodoItem;

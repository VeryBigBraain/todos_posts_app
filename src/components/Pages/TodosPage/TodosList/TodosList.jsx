import cl from './TodosList.module.css';
import TodoItem from './TodoItem/TodoItem.jsx';

const Todos = ({ todos, ...props}) => {

  if (!todos.length) {
    return <div className={cl.noTodos}>There is no todos!</div>
  }
  
  return (
    <div className={cl.todos}>
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          index={index}
          {...props}
        />
      ))}
    </div>
  );
};

export default Todos;

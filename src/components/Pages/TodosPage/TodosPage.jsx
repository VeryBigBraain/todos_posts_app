import AddTodoForm from './AddTodoForm/AddTodoForm';
import FilterTodo from './FilterTodo/FilterTodo';
import TodosList from './TodosList/TodosList.jsx';
import { useState } from 'react';
import cl from './TodosPage.module.css';
import { useTodos } from './../../../hooks/useTodos';

const TodosPage = () => {
  const [todos, setTodos] = useState([
    { id: 1, content: 'Some todo', type: 'uncompleted' },
    { id: 2, content: 'Another Todo', type: 'uncompleted' },
  ]);
  const [searchVal, setSearchVal] = useState('');
  const [selectVal, setSelectVal] = useState('all');

  const searchedSortedTodos = useTodos(todos, selectVal, searchVal);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const toggleCompleteTodo = (id) => {
    const todosToggle = [...todos];
    todos.forEach((todo) => {
      if (todo.id === id) {
        todo.type = todo.type === 'completed' ? 'uncompleted' : 'completed';
      }
      return todo;
    });
    setTodos(todosToggle);
  };

  return (
    <div className={cl.todosPage}>
      <h2 className={cl.formHeader}>Add new todo</h2>
      <AddTodoForm
        createTodo={createTodo}
      />
      <FilterTodo 
        setSelectVal={setSelectVal}
        searchVal={searchVal}
        setSearchVal={setSearchVal}
        selectVal={selectVal}
      />
      <TodosList
        todos={searchedSortedTodos}
        toggleCompleteTodo={toggleCompleteTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default TodosPage;

import AddTodoForm from './AddTodoForm/AddTodoForm';
import FilterTodo from './FilterTodo/FilterTodo';
import TodosList from './TodosList/TodosList.jsx';
import { useState, useEffect } from 'react';
import cl from './TodosPage.module.css';
import { useTodos } from './../../../hooks/useTodos';
import TodosService from './../../../API/TodosService';
import Loader from './../../UI/Loader/Loader';
import { useFetching } from './../../../hooks/useFetching';

const TodosPage = () => {
  const [todos, setTodos] = useState([]);
  const [searchVal, setSearchVal] = useState('');
  const [selectVal, setSelectVal] = useState('all');
  const searchedSortedTodos = useTodos(todos, selectVal, searchVal);
  const [fetchTodos, isTodosLoading, todosError] = useFetching(async () => {
    const todos = await TodosService.getAllTodos();
    setTodos(todos);
  });

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
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(todosToggle);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className={cl.todosPage}>
      <h2 className={cl.formHeader}>Add new todo</h2>
      <AddTodoForm createTodo={createTodo} />
      <FilterTodo
        setSelectVal={setSelectVal}
        searchVal={searchVal}
        setSearchVal={setSearchVal}
        selectVal={selectVal}
      />
      {todosError && <h1>Some error</h1>}
      {isTodosLoading ? (
        <Loader />
      ) : (
        <TodosList
          todos={searchedSortedTodos}
          toggleCompleteTodo={toggleCompleteTodo}
          deleteTodo={deleteTodo}
        />
      )}
    </div>
  );
};

export default TodosPage;

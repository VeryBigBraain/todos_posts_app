import AddTodoForm from './AddTodoForm/AddTodoForm';
import FilterTodo from './FilterTodo/FilterTodo';
import { useState } from 'react';
import cl from './TodosPage.module.css';
import { useSortedTodos, useItemsList } from './../../../hooks/useItems';
import ItemsList from './../../common/ItemsList/ItemsList';
import TodoItem from './TodoItem/TodoItem';
import { todoAPI } from './../../../API/serviceAPI';
import { useFetching } from './../../../hooks/useFetching';
import Loader from './../../UI/Loader/Loader';

const TodosPage = ({state}) => {
  const [todos, setTodos] = state;
  const [searchVal, setSearchVal] = useState('');
  const [sortVal, setSortVal] = useState('all');
  const [userId, setUserId] = useState(1);
  const [fetchCreate, isTodoCreateLoading] = useFetching(createTodo);
  const searchedSortedTodos = useItemsList(
    todos,
    sortVal,
    searchVal,
    useSortedTodos
  );

  async function createTodo(newTodo) {
    await todoAPI.createTodo(newTodo);
    setTodos([...todos, newTodo]);
  }

  async function updateTodo(editingTodo, key) {
    await todoAPI.updateTodo(editingTodo, key);
    const editedTodos = [...todos];
    const indexTodo = editedTodos.findIndex(
      (todo) => todo.id === editingTodo.id
    );
    editedTodos.splice(indexTodo, 1, editingTodo);
    setTodos(editedTodos);
  }

  async function deleteTodo(id) {
    await todoAPI.deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className={cl.todos__page}>
      <div className={cl.todos__content}>
        <h2 className={cl.form__header}>Add new todo</h2>
        <AddTodoForm create={fetchCreate} userId={userId} isCreateLoading={isTodoCreateLoading} />
        <FilterTodo
          setSortVal={setSortVal}
          searchVal={searchVal}
          setSearchVal={setSearchVal}
          sortVal={sortVal}
        />
        <span className={cl.todos__loader}>
          {isTodoCreateLoading && <Loader width="50" height="30" />}
        </span>
        <div className={cl.todos__list}>
          <ItemsList
            items={searchedSortedTodos}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            Component={TodoItem}
            itemsName="todos"
            isListLoading={isTodoCreateLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default TodosPage;

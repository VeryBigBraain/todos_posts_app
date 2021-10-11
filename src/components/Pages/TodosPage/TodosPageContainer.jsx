import { useContext } from 'react';
import { useSortedTodos, useItemsList } from './../../../hooks/useItems';
import { todoAPI } from './../../../API/serviceAPI';
import { useFetching } from './../../../hooks/useFetching';
import { todoContext } from './../../../context';
import { setTodosAC, setSortValAC, setSearchValAC } from './../../../reducers/todo-reducer';
import { getTodos, getSearchVal, getSortVal,  getUserId } from './../../../selectors/todo-selector';
import TodosPage from './TodosPage';

const TodosPageContainer = () => {
  const [state, dispatch] = useContext(todoContext);

  const todos = getTodos(state);
  const searchVal = getSearchVal(state);
  const sortVal = getSortVal(state);
  const userId = getUserId(state);

  const [fetchCreate, isTodoCreateLoading] = useFetching(createTodo);
  const searchedSortedTodos = useItemsList(
    todos,
    sortVal,
    searchVal,
    useSortedTodos
  );

  const setTodos = (todos) => dispatch(setTodosAC(todos));
  const setSortVal = (sortVal) => dispatch(setSortValAC(sortVal));
  const setSearchVal = (searchVal) => dispatch(setSearchValAC(searchVal));

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
    <TodosPage
      fetchCreate={fetchCreate}
      isTodoCreateLoading={isTodoCreateLoading}
      searchedSortedTodos={searchedSortedTodos}
      setTodos={setTodos}
      setSortVal={setSortVal}
      sortVal={sortVal}
      setSearchVal={setSearchVal}
      searchVal={searchVal}
      createTodo={createTodo}
      updateTodo={updateTodo}
      deleteTodo={deleteTodo}
      userId={userId}
    />
  );
};

export default TodosPageContainer;

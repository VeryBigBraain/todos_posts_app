import AddTodoForm from './AddTodoForm/AddTodoForm';
import FilterTodo from './FilterTodo/FilterTodo';
import cl from './TodosPage.module.css';
import ItemsList from './../../common/ItemsList/ItemsList';
import TodoItem from './TodoItem/TodoItem';
import Loader from './../../UI/Loader/Loader';


const TodosPage = ({
  fetchCreate,
  isTodoCreateLoading,
  searchedSortedTodos,
  setTodos,
  setSortVal,
  sortVal,
  setSearchVal,
  searchVal,
  createTodo,
  updateTodo,
  deleteTodo,
  userId
}) => {
  return (
    <div className={cl.todos__page}>
      <div className={cl.todos__content}>
        <h2 className={cl.form__header}>Add new todo</h2>
        <AddTodoForm
          create={fetchCreate}
          userId={userId}
          isCreateLoading={isTodoCreateLoading}
        />
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

import { useMemo } from 'react';

export const useSortedTodos = (todos, selectVal) => {
  const sortedTodos = useMemo(() => {
    switch (selectVal) {
      case 'completed':
        return todos.filter((todo) => todo.completed);
      case 'uncompleted':
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  }, [todos, selectVal]);

  return sortedTodos;
};

export const useTodos = (todos, selectVal, searchVal) => {
  const sortedTodos = useSortedTodos(todos, selectVal);

  const searchedSortedTodos = useMemo(() => {
    return sortedTodos.filter((todo) =>
      todo.title.toLowerCase().includes(searchVal)
    );
  }, [sortedTodos, searchVal]);

  return searchedSortedTodos;
};

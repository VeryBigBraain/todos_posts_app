import { useMemo } from 'react';

export const useSortedTodos = (todos, selectVal) => {
  const sortedTodos = useMemo(() => {
    if (selectVal !== 'all') {
      return todos.filter((todo) => todo.type === selectVal);
    }
    return todos;
  }, [todos, selectVal]);

  return sortedTodos;
}

export const useTodos = (todos, selectVal, searchVal) => {
  const sortedTodos = useSortedTodos(todos, selectVal);
  
  const searchedSortedTodos = useMemo(() => {
    return sortedTodos.filter((todo) => todo.content.toLowerCase().includes(searchVal));
  }, [sortedTodos, searchVal]);

  return searchedSortedTodos;
}
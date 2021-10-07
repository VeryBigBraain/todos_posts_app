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

export const useSortedPosts = (posts, sortVal) => {
  const sortedPost = useMemo(() => {
    const sortedPosts = [...posts];
    sortedPosts.sort((a, b) => {
      return (typeof(a[sortVal]) === 'number') 
        ? a[sortVal] > b[sortVal] 
        : a[sortVal].toString().localeCompare(b[sortVal].toString()
      )});

    return sortedPosts;
  }, [posts, sortVal]);
  
  return sortedPost;
};

export const useItemsList = (items, sortVal, searchVal, sortItem) => {
  const sortedItems = sortItem(items, sortVal);

  const searchedSortedItems = useMemo(() => {
    return sortedItems.filter((item) =>
      item.title.toLowerCase().includes(searchVal)
    );
  }, [sortedItems, searchVal]);

  return searchedSortedItems;
};

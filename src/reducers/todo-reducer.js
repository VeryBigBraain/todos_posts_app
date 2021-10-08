const SET_TODOS = 'SET_TODOS';
const SET_SEARCH_VAL = 'SET_SEARCH_VAL';
const SET_SORT_VAL = 'SET_SORT_VAL';

export const todoReducer = (state, action) => {
  switch (action.type) {
    case SET_TODOS:
      return {
        ...state,
        todos: action.todos,
      }
    case SET_SEARCH_VAL:
      return {
        ...state,
        searchVal: action.searchVal,
      }
    case SET_SORT_VAL:
      return {
        ...state,
        sortVal: action.sortVal,
      }
  
    default:
      return state;
  }
}

export const setTodosAC = (todos) => ({type: SET_TODOS, todos});
export const setSearchValAC = (searchVal) => ({type: SET_SEARCH_VAL, searchVal});
export const setSortValAC = (sortVal) => ({type: SET_SORT_VAL, sortVal});
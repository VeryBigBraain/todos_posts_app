const SET_POSTS = 'SET_POSTS';
const SET_SORT_VAL = 'SET_SORT_VAL';
const SET_POST_PORTION = 'SET_POST_PORTION';
const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES';
const SET_LIMIT = 'SET_LIMIT';
const SET_PAGE = 'SET_PAGE';

export const postReducer = (state, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.posts,
      }
    case SET_SORT_VAL:
      return {
        ...state,
        sortVal: action.sortVal,
      }
    case SET_POST_PORTION:
      return {
        ...state,
        postsPortion: action.postsPortion,
      }
    case SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.totalPages,
      }
    case SET_LIMIT:
      return {
        ...state,
        limit: action.limit,
      }
    case SET_PAGE:
      return {
        ...state,
        page: action.page,
      }
    default:
      return state;
  }
}

export const setPostsAC = (posts) => ({type: SET_POSTS, posts});
export const setSortValAC = (sortVal) => ({type: SET_SORT_VAL, sortVal});
export const setPostsPortionAC = (postsPortion) => ({type: SET_POST_PORTION, postsPortion});
export const setTotalPagesAC = (totalPages) => ({type: SET_TOTAL_PAGES, totalPages});
export const setLimitAC = (limit) => ({type: SET_LIMIT, limit});
export const setPageAC = (page) => ({type: SET_PAGE, page});
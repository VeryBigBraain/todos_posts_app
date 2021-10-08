
import TodosPageContainer from './../components/Pages/TodosPage/TodosPageContainer';
import PostPage from './../components/Pages/PostsPage/PostPage/PostPage';
import PostsPageContainer from './../components/Pages/PostsPage/PostsPageContainer';
import NoPage from './../components/Pages/NoPage/NoPage';

export const routes = [
  {path: '/', component: TodosPageContainer, exact: true},
  {path: '/posts/:id', component: PostPage, exact: false},
  {path: '/posts', component: PostsPageContainer, exact: false},
  {path: '/nopage', component: NoPage, exact: false},
];
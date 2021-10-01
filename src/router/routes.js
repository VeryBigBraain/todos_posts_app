
import TodosPage from './../components/Pages/TodosPage/TodosPage';
import PostPage from './../components/Pages/PostsPage/PostPage/PostPage';
import PostsPage from './../components/Pages/PostsPage/PostsPage';
import NoPage from './../components/Pages/NoPage/NoPage';

export const routes = [
  {path: '/', component: TodosPage, exact: true},
  {path: '/posts/:id', component: PostPage, exact: false},
  {path: '/posts', component: PostsPage, exact: false},
  {path: '/nopage', component: NoPage, exact: false},
];
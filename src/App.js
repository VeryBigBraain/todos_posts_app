import cl from './App.css';
import Navbar from './components/Navbar/Navbar';
import Pages from './components/Pages/Pages';
import { useReducer } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme, ThemeProvider  } from '@material-ui/core/styles';
import { todoReducer } from './reducers/todo-reducer';
import { store } from './store/store';
import { todoContext, postContext } from './context';
import { postReducer } from './reducers/post-reducer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f52549',
    }
  },
});

function App() {
  const [todoState, todoDispatch] = useReducer(todoReducer, store.todoState);
  const [postState, postDispatch] = useReducer(postReducer, store.postState);

  return (
    <postContext.Provider value={[postState, postDispatch]}>
      <todoContext.Provider value={[todoState, todoDispatch]}>
        <div className={cl.app}>
          <ThemeProvider theme={theme}>
            <Router>
              <Navbar />
              <Pages />
            </Router>
          </ThemeProvider>
        </div>
      </todoContext.Provider>
    </postContext.Provider>
  );
}

export default App;

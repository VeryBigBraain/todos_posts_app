import cl from './App.css';
import Navbar from './components/Navbar/Navbar';
import Pages from './components/Pages/Pages';
import { useReducer } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { todoReducer } from './reducers/todo-reducer';
import { store } from './store/store';
import { todoContext } from './context';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fe6323',
    },
    warning: {
      main: '#dc3545',
    },
  }
});

function App() {
  const [todoState, todoDispatch] = useReducer(todoReducer, store.todoState);

  return (
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
  );
}

export default App;

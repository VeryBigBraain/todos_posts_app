import cl from './App.css';
import Navbar from './components/Navbar/Navbar';
import Pages from './components/Pages/Pages';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme, ThemeProvider  } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f52549',
    }
  },
});

function App() {
  const state = useState([]);

  return (
    <div className={cl.app}>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Pages state={state} />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;

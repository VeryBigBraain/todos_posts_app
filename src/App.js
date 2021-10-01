import cl from './App.css';
import Navbar from './components/Navbar/Navbar';
import Pages from './components/Pages/Pages';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className={cl.app}>
      <Router>
        <Navbar />
        <Pages />
      </Router>
    </div>
  );
}

export default App;

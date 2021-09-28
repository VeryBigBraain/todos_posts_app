import cl from './App.css';
import Navbar from './components/Navbar/Navbar';
import TodosPage from './components/Pages/TodosPage/TodosPage';

function App() {
  return (
    <div className={cl.app}>
      <Navbar />
      <TodosPage />
    </div>
  );
}

export default App;

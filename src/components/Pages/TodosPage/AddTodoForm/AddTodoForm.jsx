import cl from './AddTodoForm.module.css';
import MyInput from './../../../UI/inputs/MyInput';
import MyButton from './../../../UI/buttons/MyButton';
import { useState } from 'react';

const AddTodoForm = ({ createTodo }) => {
  const [todoVal, setTodoVal] = useState('');

  const addTodo = () => {
    if (todoVal.trim() !== '') {
      const newTodo = { id: Date.now(), title: todoVal, completed: false };
      createTodo(newTodo);
      setTodoVal('');
    }
  };

  return (
    <div className={cl.addTodo}>
      <form className={cl.form}>
        <MyInput
          placeholder="Let's do it!"
          name="add-input"
          value={todoVal}
          setValue={setTodoVal}
        />
        <MyButton name="btn" callback={addTodo}>
          Add
        </MyButton>
      </form>
    </div>
  );
};

export default AddTodoForm;

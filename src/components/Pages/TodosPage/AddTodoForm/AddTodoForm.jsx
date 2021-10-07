import cl from './AddTodoForm.module.css';
import MyInput from './../../../UI/inputs/MyInput';
import MyButton from './../../../UI/buttons/MyButton';
import { useState } from 'react';

const AddTodoForm = ({ create, userId, isCreateLoading }) => {
  const [todoVal, setTodoVal] = useState('');
  const [validationErr, setValidationErr] = useState('');

  const addTodo = () => {
    if (todoVal.trim() !== '') {
      const newTodo = { id: Date.now(), title: todoVal, completed: false, userId };
      create(newTodo);
      setTodoVal('');
    } else {
      setValidationErr('Please, write your todo here!')
    }
  };

  const onChangeTodoVal = (e) => {
    setTodoVal(e);
    setValidationErr('');
  }

  return (
    <div className={cl.addTodo}>
      <form onSubmit={(e) => e.preventDefault()} className={cl.form}>
        <MyInput
          placeholder="Let's do it!"
          name="add-input"
          value={todoVal}
          setValue={onChangeTodoVal}
          label="Add todo"
          errorText= {validationErr}
        />
        <div className={cl.btnContainer}>
          <MyButton name="btn" callback={addTodo} disabled={isCreateLoading}>
            Add
          </MyButton>
        </div>
      </form>
    </div>
  );
};

export default AddTodoForm;

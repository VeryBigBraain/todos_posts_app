import React from 'react';
import cl from './TodoModal.module.css';
import MyModal from './../../../../UI/MyModal/MyModal';
import MyButton from './../../../../UI/buttons/MyButton';
import TextField from '@material-ui/core/TextField';

const TodoModal = React.forwardRef(
  (
    {
      activeModal,
      setActiveModal,
      modalValue,
      setModalValue,
      saveEditTodo,
      todo,
      isLoading,
    },
    ref
  ) => {
    return (
      <div>
        <MyModal active={activeModal} setActive={setActiveModal}>
          <div className={cl.modal}>
            <div className={cl.modalInputContainer}>
              <TextField
                inputRef={ref}
                value={modalValue}
                type="text"
                label="Edit"
                variant="standard"
                onChange={(e) => setModalValue(e.target.value)}
                className={cl.modalInput}
              />
            </div>
            <div className={cl.modalBtns}>
              <div>
                <MyButton
                  callback={saveEditTodo}
                  args={[{ ...todo, title: modalValue }, 'title']}
                  disabled={isLoading}
                >
                  Save
                </MyButton>
              </div>
              <div>
                <MyButton callback={setActiveModal} args={[false]}>
                  Exit
                </MyButton>
              </div>
            </div>
          </div>
        </MyModal>
      </div>
    );
  }
);

export default TodoModal;

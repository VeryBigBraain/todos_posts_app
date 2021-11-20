import cl from './TodoItem.module.css';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import EditIcon from '@material-ui/icons/Edit';
import MyButton from './../../../UI/buttons/MyButton';
import { useState, useRef, useEffect } from 'react';
import TodoModal from './TodoModal/TodoModal';
import Loader from './../../../UI/Loader/Loader';
import { useFetching } from './../../../../hooks/useFetching';

const TodoItem = ({ item, index, deleteTodo, updateTodo }) => {
    const todo = {...item };
    let inputRef = useRef();
    const [activeModal, setActiveModal] = useState(false);
    const [modalValue, setModalValue] = useState(todo.title);
    const [fetchUpdate, isUpdateLoading] = useFetching(updateTodo);
    const [fetchDelete, isDeleteLoading] = useFetching(deleteTodo);

    const callModal = () => {
        setActiveModal(true);
        inputRef.current.focus();
    }

    useEffect(() => {
        return () => inputRef.current = null;
    }, []);

    return ( <
        div key = { todo.id }
        className = { cl.todo } >
        <
        TodoModal activeModal = { activeModal }
        setActiveModal = { setActiveModal }
        modalValue = { modalValue }
        setModalValue = { setModalValue }
        saveEditTodo = { fetchUpdate }
        isLoading = { isUpdateLoading }
        todo = { todo }
        ref = { inputRef }
        /> <
        div className = { cl.todo__body } >
        <
        div className = { `${todo.completed && cl.completed} ${cl.todo__content}` } > { todo.title } < /div > <
        div className = { cl.buttons } >
        <
        span className = { cl.todo__loading } > {
            (isUpdateLoading || isDeleteLoading) && < Loader height = "20"
            width = "40" / >
        } <
        /span> <
        MyButton disabled = { isUpdateLoading }
        className = { cl.completeBtn }
        args = {
            [{...todo, completed: !todo.completed }, 'completed']
        }
        callback = { fetchUpdate }
        variant = "contained"
        customStyle = {
            { color: '#fff' }
        } >
        <
        DoneIcon / >
        <
        /MyButton> <
        MyButton className = { cl.editBtn }
        callback = { callModal }
        variant = "contained"
        MyButton disabled = { isUpdateLoading }
        customStyle = {
            { color: '#fff' }
        } >
        <
        EditIcon / >
        <
        /MyButton> <
        MyButton disabled = { isDeleteLoading }
        className = { cl.deleteBtn }
        args = {
            [todo.id]
        }
        callback = { fetchDelete }
        variant = "contained"
        color = "warning" >
        <
        ClearIcon / >
        <
        /MyButton> < /
        div > <
        /div> < /
        div >
    );
};

export default TodoItem;
import cl from './MyButton.module.css';

const MyButton = ({ children, callback, args = [] ,...props }) => {
  const onSubmit = (e, args) => {
    e.preventDefault();
    callback(...args);
  }

  return (
    <button onClick={(e) => onSubmit(e, args)} {...props} className={cl.myBtn}>{children}</button>
  )
}

export default MyButton;
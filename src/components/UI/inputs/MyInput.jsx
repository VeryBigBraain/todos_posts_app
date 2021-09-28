import cl from './MyInput.module.css';

const MyInput = ({value, setValue, ...props}) => {

  return (
    <input className={cl.myInput} 
      type="text" 
      onChange={(e) => setValue(e.target.value)} 
      value={value}
      {...props}
    />
  )
}

export default MyInput;
import cl from './MyInput.module.css';
import TextField from '@material-ui/core/TextField';


const MyInput = ({value, setValue, label, errorText = false, required = false, ...props}) => {

  return (
    <TextField className={cl.myInput} 
      type="text" 
      onChange={(e) => setValue(e.target.value)} 
      value={value}
      label={label}
      variant="standard"
      error = {!!errorText.length}
      helperText = {errorText}
      required={required}
      {...props}
    />
  )
}

export default MyInput;
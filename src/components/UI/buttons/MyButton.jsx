import cl from './MyButton.module.css';
import Button from '@material-ui/core/Button';

const MyButton = ({
  children,
  callback,
  customStyle = {},
  color = 'primary',
  fontSize = 'small',
  size = 'small',
  variant = 'outlined',
  args = [],
  ...props
}) => {

  const onSubmit = (e, args) => {
    e.preventDefault();
    callback(...args);
  };

  return (
    <Button
      type="submit"
      onClick={(e) => onSubmit(e, args)}
      {...props}
      className={cl.myBtn}
      variant={variant}
      color={color}
      size={size}
      fullWidth
      sx={customStyle}
    >
      {children}
    </Button>
  );
};

export default MyButton;

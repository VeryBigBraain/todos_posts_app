import cl from './MySelect.module.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const MySelect = ({options, defaultValue, callback, ...props }) => {
  return (
    <Select 
      onChange={(e) => callback(e.target.value)}
      {...props}
      className={cl.mySelect}
      size="small"
    >
      <MenuItem disabled value="">{defaultValue}</MenuItem>
      {options.map(option => 
        <MenuItem key={option.value} value={option.value}>
          {option.name}
        </MenuItem>
      )}
    </Select>
  )
};

export default MySelect;

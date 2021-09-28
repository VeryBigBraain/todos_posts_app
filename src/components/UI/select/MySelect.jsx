import cl from './MySelect.module.css';

const MySelect = ({options, defaultValue, callback, ...props }) => {
  return (
    <select 
      onChange={(e) => callback(e.target.value)}
      {...props}
      className={cl.mySelect}
    >
      <option disabled value="">{defaultValue}</option>
      {options.map(option => 
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      )}
    </select>
  )
};

export default MySelect;

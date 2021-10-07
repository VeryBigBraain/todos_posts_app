import cl from './FilterTodo.module.css';
import MySelect from './../../../UI/select/MySelect';
import TextField from '@material-ui/core/TextField';

const FilterTodo = ({
  setSortVal,
  sortVal,
  searchVal,
  setSearchVal,
}) => {
  return (
    <div className={cl.filterTodo}>
        <TextField
          label="Search"
          variant="outlined"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          name="search-input"
          placeholder="Todo..."
          size="small"
          className={cl.textfield}
        />
      <MySelect
        defaultValue="Status of todo:"
        options={[
          { value: 'all', name: 'all' },
          { value: 'completed', name: 'completed' },
          { value: 'uncompleted', name: 'uncompleted' },
        ]}
        callback={setSortVal}
        name="select"
        value={sortVal}
      >
      </MySelect>
    </div>
  );
};

export default FilterTodo;

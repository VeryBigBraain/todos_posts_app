import cl from './FilterTodo.module.css';
import MyInput from './../../../UI/inputs/MyInput';
import MySelect from './../../../UI/select/MySelect';

const FilterTodo = ({
  todos,
  setSelectVal,
  selectVal,
  searchVal,
  setSearchVal,
}) => {
  return (
    <div className={cl.filterTodo}>
      <MyInput
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
        name="search-input"
        placeholder="Search..."
      />
      <MySelect
        defaultValue="Status of todo:"
        options={[
          { value: 'all', name: 'all' },
          { value: 'completed', name: 'completed' },
          { value: 'uncompleted', name: 'uncompleted' },
        ]}
        callback={setSelectVal}
        name="select"
        value={selectVal}
      >
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
        <option value="all">All</option>
      </MySelect>
    </div>
  );
};

export default FilterTodo;

import cl from './FilterPosts.module.css';
import MySelect from './../../../UI/select/MySelect';

const FilterPosts = ({
  sortVal,
  setSortVal,
}) => {
  return (
    <div className={cl.filter__post}>
      <MySelect
          defaultValue="Sort by:"
          options={[
            { value: 'id', name: 'number' },
            { value: 'title', name: 'title' },
            { value: 'body', name: 'content' },
          ]}
          value={sortVal}
          callback={setSortVal}
        />
    </div>
  );
};

export default FilterPosts;

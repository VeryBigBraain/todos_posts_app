import cl from './FilterPosts.module.css';
import MySelect from './../../../UI/select/MySelect';

const FilterPosts = ({
  sortVal,
  setSortVal,
  postsPortion,
  setPostsPortion
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
        <MySelect
          defaultValue="Posts to load:"
          options={[
            { value: 5, name: '5' },
            { value: 10, name: '10' },
            { value: 25, name: '25' },
            { value: -1, name: 'all' },
          ]}
          value={postsPortion}
          callback={setPostsPortion}
        />
    </div>
  );
};

export default FilterPosts;

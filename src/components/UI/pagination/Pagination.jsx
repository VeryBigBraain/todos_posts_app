import cl from './Pagination.module.css';
import { usePagesArray } from './../../../hooks/usePagesArray';

const Pagination = ({ totalPages, page, changePage }) => {
  const pagesArray = usePagesArray(totalPages)
  return (
    <div>
      {pagesArray.map((p) => (
        <span
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? cl.pageCurrent : ''}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;

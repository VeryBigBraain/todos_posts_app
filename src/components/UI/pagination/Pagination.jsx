import cl from './Pagination.module.css';
import { getPagesArray } from '../../../utils/pages.js';

const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = getPagesArray(totalPages);
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

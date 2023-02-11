import { Link } from 'react-router-dom';

interface PaginatorProps {
  pagesQty: number;
  currentPage: string;
  handleChange: (pageNumber: number) => void;
}

const Paginator = (props: PaginatorProps): JSX.Element => {
  const { pagesQty, currentPage, handleChange } = props;

  const FIRST_PAGE = '1';

  const createList = (
    pagesQty: PaginatorProps['pagesQty']
  ): Array<JSX.Element> => {
    const list = Array.from(Array(pagesQty).keys(), index => index + 1);
    return list.map(pageIndex => {
      if (pageIndex === parseInt(currentPage)) {
        return (
          <li
            key={pageIndex}
            className='preventDefaultStyle pagesList__list__index pagesList__list__index-active'>
            {pageIndex}
          </li>
        );
      } else {
        return (
          <li key={pageIndex}>
            <Link
              to={`/blogs/${pageIndex}`}
              onClick={() => handleChange(pageIndex)}
              key={pageIndex}
              className='preventDefaultStyle pagesList__list__index pagesList__list__index-unactive'>
              {pageIndex}
            </Link>
          </li>
        );
      }
    });
  };

  return (
    <div className='pagesList'>
      {currentPage === FIRST_PAGE ? (
        <button disabled className='preventDefaultStyle genericButton-disabled'>
          Previous
        </button>
      ) : (
        <Link
          to={`/blogs/${parseInt(currentPage) - 1}`}
          onClick={() => handleChange(parseInt(currentPage) - 1)}
          className='preventDefaultStyle genericButton'>
          Previous
        </Link>
      )}
      <ul className='pagesList__list'>{createList(pagesQty)}</ul>
      {parseInt(currentPage) === pagesQty ? (
        <button disabled className='preventDefaultStyle genericButton-disabled'>
          Next
        </button>
      ) : (
        <Link
          to={`/blogs/${parseInt(currentPage) + 1}`}
          onClick={() => handleChange(parseInt(currentPage) + 1)}
          className='preventDefaultStyle genericButton'>
          Next
        </Link>
      )}
    </div>
  );
};

export default Paginator;

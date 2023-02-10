interface PaginatorProps {
  pagesQty: number;
  currentPage: number;
  handleChange: (pageNumber: number) => void;
}

const Paginator = (props: PaginatorProps): JSX.Element => {
  const { pagesQty, currentPage, handleChange } = props;

  const FIRST_PAGE = 1;

  const createList = (
    pagesQty: PaginatorProps['pagesQty']
  ): Array<JSX.Element> => {
    const list = Array.from(Array(pagesQty).keys(), index => index + 1);
    return list.map(pageIndex => {
      if (pageIndex === currentPage) {
        return (
          <li
            key={pageIndex}
            className='pagesList__list__index pagesList__list__index-active'>
            {pageIndex}
          </li>
        );
      } else {
        return (
          <li
            key={pageIndex}
            className='pagesList__list__index pagesList__list__index-unactive'
            onClick={() => handleChange(pageIndex)}>
            {pageIndex}
          </li>
        );
      }
    });
  };

  return (
    <div className='pagesList'>
      {currentPage === FIRST_PAGE ? (
        <button disabled className='genericButton-disabled'>
          Previous
        </button>
      ) : (
        <button
          className='genericButton'
          onClick={() => handleChange(currentPage - 1)}>
          Previous
        </button>
      )}
      <ul className='pagesList__list'>{createList(pagesQty)}</ul>
      {currentPage === pagesQty ? (
        <button disabled className='genericButton-disabled'>
          Next
        </button>
      ) : (
        <button
          className='genericButton'
          onClick={() => handleChange(currentPage + 1)}>
          Next
        </button>
      )}
    </div>
  );
};

export default Paginator;

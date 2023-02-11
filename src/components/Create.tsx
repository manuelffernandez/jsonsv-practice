import { Link } from 'react-router-dom';
import { getLastPageContext } from '../contexts/LastPageContext';
import { BlogForm } from './';

const Create = (): JSX.Element => {
  const { lastPageNumber } = getLastPageContext();

  return (
    <>
      <div className='pageButtonsContainer'>
        <Link
          to={`/blogs/${lastPageNumber}`}
          className='preventDefaultStyle genericButton'>
          Back
        </Link>
      </div>
      <BlogForm />
    </>
  );
};

export default Create;

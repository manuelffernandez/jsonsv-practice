import { Link } from 'react-router-dom';
import { BlogForm } from './';

const Create = (): JSX.Element => {
  return (
    <>
      <div className='pageButtonsContainer'>
        <Link to={'/blogs'} className='preventDefaultStyle genericButton'>
          Back
        </Link>
      </div>
      <BlogForm />
    </>
  );
};

export default Create;

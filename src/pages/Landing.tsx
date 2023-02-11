import { Link } from 'react-router-dom';

const Landing = (): JSX.Element => {
  const FIRST_PAGE = '1';

  return (
    <div className='pages'>
      <div className='pageButtonsContainer'>
        <Link to='about' className='preventDefaultStyle genericButton'>
          About
        </Link>
        <Link
          to={`/blogs/${FIRST_PAGE}`}
          className='preventDefaultStyle genericButton'>
          Blogs
        </Link>
      </div>
    </div>
  );
};

export default Landing;

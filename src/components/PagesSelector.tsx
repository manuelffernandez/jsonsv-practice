import { Link } from 'react-router-dom';

const PagesSelector = (): JSX.Element => {
  return (
    <div className='pages'>
      <div className='pageButtonsContainer'>
        <Link to='/blogs' className='preventDefaultStyle genericButton'>
          Blogs
        </Link>
        <Link to='about' className='preventDefaultStyle genericButton'>
          About
        </Link>
      </div>
    </div>
  );
};

export default PagesSelector;

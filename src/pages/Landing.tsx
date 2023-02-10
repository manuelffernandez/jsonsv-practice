import { Link } from 'react-router-dom';

const Landing = (): JSX.Element => {
  return (
    <div className='pages'>
      <div className='pageButtonsContainer'>
        <Link to='about' className='preventDefaultStyle genericButton'>
          About
        </Link>
        <Link to='/blogs' className='preventDefaultStyle genericButton'>
          Blogs
        </Link>
      </div>
    </div>
  );
};

export default Landing;

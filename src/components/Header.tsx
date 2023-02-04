import { Link } from 'react-router-dom';

const Header = (): JSX.Element => {
  return (
    <header className='header'>
      <Link to='/' className='preventDefaultStyle'>
        <div className='header__brandLogo w600'>Blog Manu</div>
      </Link>
    </header>
  );
};

export default Header;

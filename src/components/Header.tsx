import { Link } from 'react-router-dom';

const Header = (): JSX.Element => {
  return (
    <header className='header'>
      <Link to='/' className='preventDefaultStyle header__brandLogo w600'>
        Blog Manu
      </Link>
      <a
        href='https://github.com/manuelffernandez/jsonsv-practice'
        target='_blank'
        className='preventDefaultStyle header__repoLink'>
        Link to the repo
      </a>
    </header>
  );
};

export default Header;

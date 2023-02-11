import { Header, Footer } from '../components';
import { Outlet } from 'react-router-dom';

const Root = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className='main'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;

import { Outlet, Link } from 'react-router-dom';

const Blogs = (): JSX.Element => {
  return (
    <>
      <h1 className='title w600'>Our Blogs</h1>
      <Outlet />
    </>
  );
};

export default Blogs;

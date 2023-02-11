import { createBrowserRouter } from 'react-router-dom';
import { BlogList, BlogDetail, Create } from './components';
import { Root, ErrorPage, Blogs, About, Landing } from './pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'blogs/:pageNumber',
        element: <Blogs />,
        children: [
          {
            index: true,
            element: <BlogList />,
          },
        ],
      },
      {
        path: 'blogs/blogDetail/:blogId',
        element: <BlogDetail />,
      },
      {
        path: 'blogs/create',
        element: <Create />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

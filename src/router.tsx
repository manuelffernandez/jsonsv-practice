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
        path: 'blogs',
        element: <Blogs />,
        children: [
          {
            index: true,
            element: <BlogList />,
          },
          {
            path: 'blogDetail/:blogId',
            element: <BlogDetail />,
          },
          {
            path: 'create',
            element: <Create />,
          },
        ],
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

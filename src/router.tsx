import { createBrowserRouter } from 'react-router-dom';
import { BlogList, PagesSelector } from './components';
import { Root, ErrorPage, Detail, Blogs, About, Create } from './pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <PagesSelector />,
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
            element: <Detail />,
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

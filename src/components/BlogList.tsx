import { useEffect, useState } from 'react';
import { ResponseObject, APIBlog, blogsData } from '../interfaces';
import { getBlogs } from '../services/requests';
import { BlogItem, Paginator } from './';
import { Link, useParams } from 'react-router-dom';
import { getLastPageContext } from '../contexts/LastPageContext';

interface BlogsStates {
  blogs: Array<APIBlog>;
  error: string;
  isLoading: boolean;
  currentPage: string;
  pagesQty: number;
}

const BlogList = (): JSX.Element => {
  const { onPageChange, lastPageNumber } = getLastPageContext();

  const [blogs, setBlogs] = useState<BlogsStates['blogs']>([]);
  const [error, setError] = useState<BlogsStates['error']>('');
  const [isLoading, setIsLoading] = useState<BlogsStates['isLoading']>(false);
  const [currentPage, setCurrentPage] =
    useState<BlogsStates['currentPage']>(lastPageNumber);
  const [pagesQty, setPagesQty] = useState<BlogsStates['pagesQty']>(1);

  const { pageNumber } = useParams();

  const BLOGS_PER_PAGE = 5;

  const handleResponse = (res: ResponseObject<blogsData>) => {
    setIsLoading(false);

    if (res.isOk) {
      if (res.blogs.length > 0) {
        setPagesQty(Math.ceil(res.blogsQty / BLOGS_PER_PAGE));
        setBlogs(res.blogs);
        setError('');
      } else {
        setError('No blogs founded');
      }
    } else {
      // ts assertion
      setError(res.text as string);
    }
  };

  const handleChangePage = (newPageNumber: number) => {
    if (newPageNumber > pagesQty) {
      return;
    } else {
      setCurrentPage(newPageNumber.toString());
    }
  };

  useEffect(() => {
    setIsLoading(true);

    // ts assertion
    onPageChange(pageNumber as string);

    // ts assertion
    setCurrentPage(pageNumber as string);

    // ts assertion
    getBlogs(pageNumber as string, BLOGS_PER_PAGE.toString()).then(res => {
      handleResponse(res);
    });
  }, [currentPage]);

  const loadContent = () => {
    return !error ? (
      <>
        <div className='pageButtonsContainer'>
          <Link to={'/'} className='preventDefaultStyle genericButton'>
            Back
          </Link>
          <Link
            to='/blogs/create'
            className='preventDefaultStyle genericButton w300'>
            Add a new blog
          </Link>
        </div>
        {isLoading ? (
          <h2 className='title w600'>Loading...</h2>
        ) : (
          <ul>
            {blogs.map(blog => {
              return <BlogItem key={blog.id} blog={blog} />;
            })}
          </ul>
        )}
        <Paginator
          pagesQty={pagesQty}
          currentPage={currentPage}
          handleChange={handleChangePage}
        />
      </>
    ) : (
      <>
        <h1 className='subtitle'>{error}</h1>
        <Link to='/' className='preventDefaultStyle genericButton'>
          Back to home
        </Link>
      </>
    );
  };

  return <>{loadContent()}</>;
};

export default BlogList;

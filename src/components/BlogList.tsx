import { useEffect, useState } from 'react';
import { ResponseObject, APIBlog, blogsData } from '../interfaces';
import { getBlogs } from '../services/requests';
import { BlogItem, Paginator } from './';
import { Link } from 'react-router-dom';

interface BlogsStates {
  blogs: Array<APIBlog>;
  error: string;
  isLoading: boolean;
  currentPage: number;
  pagesQty: number;
}

const BlogList = (): JSX.Element => {
  const [blogs, setBlogs] = useState<BlogsStates['blogs']>([]);
  const [error, setError] = useState<BlogsStates['error']>('');
  const [isLoading, setIsLoading] = useState<BlogsStates['isLoading']>(false);
  const [currentPage, setCurrentPage] = useState<BlogsStates['currentPage']>(1);
  const [pagesQty, setPagesQty] = useState<BlogsStates['pagesQty']>(1);

  const BLOGS_PER_PAGE = 5;

  const handleResponse = (res: ResponseObject<blogsData>) => {
    setIsLoading(false);

    if (res.isOk) {
      setPagesQty(Math.ceil(res.blogsQty / BLOGS_PER_PAGE));
      setBlogs(res.blogs);
      setError('');
    } else {
      setError(res.text as string);
    }
  };

  const handleChangePage = (pageNumber: number) => {
    if (pageNumber > pagesQty) {
      return;
    } else {
      setCurrentPage(pageNumber);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getBlogs(currentPage, BLOGS_PER_PAGE).then(res => {
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
          <Link to='create' className='preventDefaultStyle genericButton w300'>
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
      <h1>{error}</h1>
    );
  };

  return <>{loadContent()}</>;
};

export default BlogList;

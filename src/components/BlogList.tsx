import { useEffect, useState } from 'react';
import { ResponseObject, APIBlog } from '../interfaces';
import { getBlogs } from '../services/requests';
import { BlogItem } from './';
import { Link } from 'react-router-dom';

interface BlogsStates {
  blogs: Array<APIBlog>;
  error: string;
  isLoading: boolean;
}

const BlogList = (): JSX.Element => {
  const [blogs, setBlogs] = useState<BlogsStates['blogs']>([]);
  const [error, setError] = useState<BlogsStates['error']>('');
  const [isLoading, setIsLoading] = useState<BlogsStates['isLoading']>(false);

  const handleResponse = (res: ResponseObject) => {
    setIsLoading(false);

    if (res.isOk) {
      setBlogs(res.data as Array<APIBlog>);
      setError('');
    } else {
      setError(res.text as string);
    }
  };

  useEffect(() => {
    getBlogs().then(res => {
      setIsLoading(true);
      handleResponse(res);
    });
  }, []);

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
            {blogs.map(blog => (
              <BlogItem key={blog.id} blog={blog} />
            ))}
          </ul>
        )}
      </>
    ) : (
      <h1>{error}</h1>
    );
  };

  return <>{loadContent()}</>;
};

export default BlogList;

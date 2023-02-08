import { useEffect, useState } from 'react';
import { ResponseObject, APIPost } from '../interfaces';
import { getPosts } from '../services/requests';
import { BlogItem } from './';
import { Link } from 'react-router-dom';

interface BlogsStates {
  blogs: Array<APIPost>;
  error: string;
}

const BlogList = (): JSX.Element => {
  const [blogs, setBlogs] = useState<BlogsStates['blogs']>([]);
  const [error, setError] = useState<BlogsStates['error']>('');

  const handleResponse = (res: ResponseObject) => {
    if (res.isOk) {
      setBlogs(res.data as Array<APIPost>);
      setError('');
    } else {
      setError(res.text as string);
    }
  };

  useEffect(() => {
    getPosts().then(res => {
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
        <ul>
          {blogs.map(blog => (
            <BlogItem key={blog.id} blog={blog} />
          ))}
        </ul>
      </>
    ) : (
      <h1>{error}</h1>
    );
  };

  return <>{loadContent()}</>;
};

export default BlogList;

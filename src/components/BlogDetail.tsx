import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { APIBlog, ResponseObject } from '../interfaces';
import { getBlog } from '../services/requests';

const INITIAL_STATE = {
  id: 0,
  title: '',
  body: '',
  likes: 0,
};

interface BlogDetailStates {
  blog: APIBlog;
  error: string;
}

interface BlogDetailProps {
  blogId: string;
}

const BlogDetail = (props: BlogDetailProps): JSX.Element => {
  const { blogId } = props;

  const [blog, setBlog] = useState<BlogDetailStates['blog']>(INITIAL_STATE);
  const [error, setError] = useState<BlogDetailStates['error']>('');

  const handleResponse = (res: ResponseObject) => {
    if (res.isOk) {
      setBlog(res.data![0]);
      setError('');
      console.log(blog);
    } else {
      setError(res.text as string);
    }
  };

  useEffect(() => {
    getBlog(blogId).then(res => handleResponse(res));
  }, []);
  return (
    <div>
      {!error ? (
        <>
          <div className='blogDetail'>
            <Link
              to='/blogs'
              className='preventDefaultStyle genericButton w300'>
              Back
            </Link>
            <h2 className='subtitle'>{blog?.title}</h2>
          </div>
          <div className='blogDetail'>
            <p className='w600'>{blog?.body}</p>
          </div>
        </>
      ) : (
        <h1>{error}</h1>
      )}
    </div>
  );
};

export default BlogDetail;

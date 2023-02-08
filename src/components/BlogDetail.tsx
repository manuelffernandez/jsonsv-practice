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
  isLoading: boolean;
}

interface BlogDetailProps {
  blogId: string;
}

const BlogDetail = (props: BlogDetailProps): JSX.Element => {
  const { blogId } = props;

  const [blog, setBlog] = useState<BlogDetailStates['blog']>(INITIAL_STATE);
  const [isLoading, setIsLoading] =
    useState<BlogDetailStates['isLoading']>(false);
  const [error, setError] = useState<BlogDetailStates['error']>('');

  const handleResponse = (res: ResponseObject) => {
    setIsLoading(false);

    if (res.isOk) {
      setBlog(res.data![0]);
      setError('');
      console.log(blog);
    } else {
      setError(res.text as string);
    }
  };

  useEffect(() => {
    getBlog(blogId).then(res => {
      setIsLoading(true);
      handleResponse(res);
    });
  }, []);

  return (
    <div>
      {!error ? (
        <>
          <div className='pageButtonsContainer'>
            <Link
              to='/blogs'
              className='preventDefaultStyle genericButton w300'>
              Back
            </Link>
          </div>
          {isLoading ? (
            <h2 className='title w600'>Loading...</h2>
          ) : (
            <div className='blogDetail'>
              <h2 className='subtitle blogDetail__title'>{blog?.title}</h2>
              <div className='blogDetail__detail'>
                <p className='w600'>{blog?.body}</p>
              </div>
            </div>
          )}
        </>
      ) : (
        <h1>{error}</h1>
      )}
    </div>
  );
};

export default BlogDetail;

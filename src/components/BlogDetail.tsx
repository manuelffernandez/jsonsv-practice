import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getLastPageContext } from '../contexts/LastPageContext';
import { APIBlog, blogData, ResponseObject } from '../interfaces';
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

const BlogDetail = (): JSX.Element => {
  const { blogId } = useParams();
  const { lastPageNumber } = getLastPageContext();

  const [blog, setBlog] = useState<BlogDetailStates['blog']>(INITIAL_STATE);
  const [isLoading, setIsLoading] =
    useState<BlogDetailStates['isLoading']>(false);
  const [error, setError] = useState<BlogDetailStates['error']>('');

  const handleResponse = (res: ResponseObject<blogData>) => {
    setIsLoading(false);

    if (res.isOk) {
      setBlog(res.blog[0]);
      setError('');
    } else {
      // ts assertion
      setError(res.text as string);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    // ts assertion
    getBlog(blogId as string).then(res => {
      handleResponse(res);
    });
  }, []);

  return (
    <div>
      {!error ? (
        <>
          <div className='pageButtonsContainer'>
            <Link
              to={`/blogs/${lastPageNumber}`}
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

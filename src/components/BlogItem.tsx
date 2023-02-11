import { APIBlog } from '../interfaces';
import { Link } from 'react-router-dom';

interface BlogProps {
  blog: APIBlog;
}

const Blog = (props: BlogProps): JSX.Element => {
  const { blog } = props;

  return (
    <li className='blogItem'>
      <h2 className='blogItem__title'>{blog.title}</h2>
      <p className='blogItem__stars w600'>
        <small>Stars: {blog.likes}</small>
      </p>
      <p className='blogItem__desc w300'>{blog.body.slice(0, 215)} . . .</p>
      <Link to={`/blogs/blogDetail/${blog.id}`} className='blogItem__read'>
        Read more...
      </Link>
    </li>
  );
};

export default Blog;

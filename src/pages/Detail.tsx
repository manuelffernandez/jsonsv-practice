import { useParams } from 'react-router-dom';
import { BlogDetail } from '../components';

const Detail = (): JSX.Element => {
  const { blogId } = useParams();

  return <BlogDetail blogId={blogId!} />;
};

export default Detail;

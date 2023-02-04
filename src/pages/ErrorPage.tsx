import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';

interface RootObject {
  data: string;
  error: string;
  internal: boolean;
  status: number;
  statusText: string;
}

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {error.status} {error.statusText || error.message}
        </i>
      </p>
      <Link to='/'>Back to Home</Link>
    </div>
  );
};

export default ErrorPage;

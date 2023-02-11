import { router } from './router';
import { RouterProvider } from 'react-router-dom';
import LastPageProvider from './contexts/LastPageProvider';

function App() {
  return (
    <div className='App'>
      <LastPageProvider>
        <RouterProvider router={router} />
      </LastPageProvider>
    </div>
  );
}

export default App;

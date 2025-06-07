import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './pages/Home.tsx';
import LoginPage from './pages/Login.tsx';
import App from './App.tsx';

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    errorElement : <div>Page Not Found</div>,
    children : [
      {
        path : '/',
        element : <Home />
      }
    ]
  },
  {
    path : '/login',
    element : <LoginPage />
  },
  
  
])


createRoot(document.getElementById('root') as HTMLDivElement).render(
  <RouterProvider router={router}/>
)
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './pages/Home.tsx';
import LoginPage from './pages/Login.tsx';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './stores/stores.tsx';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import StudentDashboard from './pages/StudentDashboard.tsx';
import Profile from './components/student/profile.tsx';

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    errorElement : <div>Page Not Found</div>,
    children : [
      {
        path : '/',
        element : <Home />
      },
      {
        path : '/my-dashboard',
        element : <StudentDashboard />,
        children : [{
          path : '/profile',
          element : <Profile />
        }]
      }
    ]
  },
  {
    path : '/login',
    element : <LoginPage />
  },
  
  
])


createRoot(document.getElementById('root') as HTMLDivElement).render(
  <Provider store={store}>
    <ToastContainer
        position="top-right"
        autoClose={2000}
        style={{ zIndex: 999999999 }}
      />
    <RouterProvider router={router} />
  </Provider>
)
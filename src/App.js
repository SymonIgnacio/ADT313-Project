import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Pages/Public/Login/Login';
import Dashboard from './Pages/Main/Dashboard/Dashboard';
import Main from './Pages/Main/Main';
import Register from './Pages/Public/Register/Register';
import Lists from './Pages/Main/Movie/Lists/Lists';
import Form from './Pages/Main/Movie/Form/Form';
import { AuthProvider } from './Utilities/Auth/Auth';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: 'adminmode/login',
    element: <Login />,
  },
  {
    path: 'adminmode/register',
    element: <Register />,
  },
  {
    path: '/main',
    element: <Main />,
    children: [
      {
        path: '/main/dashboard',
        element: <Dashboard />
      },
      {
        path: '/main/movies',
        element: <Lists />,
      },
      {
        path: '/main/movies/form/:id?',
        element: <Form />,
      },
    ]
  },
]);

function App() {
  return (
    <AuthProvider>
      <div className='App'>
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  );
}

export default App;
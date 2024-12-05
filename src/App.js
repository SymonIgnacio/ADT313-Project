import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './Pages/Public/Login/Login';
import Dashboard from './Pages/Main/Dashboard/Dashboard';
import Main from './Pages/Main/Main';
import Register from './Pages/Public/Register/Register';
import Lists from './Pages/Main/Movie/Lists/Lists';
import Form from './Pages/Main/Movie/Form/Form';
import CastForm from './Pages/Main/Movie/Cast/Cast';
import PhotoForm from './Pages/Main/Movie/Photos/Photo';
import VideoForm from './Pages/Main/Movie/Videos/Videos';
import { AuthProvider } from './Utilities/Auth/Auth';
import Home from './Pages/Client/Home/Home';
import Client from './Pages/Client/Client';
import Movies from './Pages/Main/Movie/Movies';
import Movie from './Pages/Client/Movie/Movie';

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
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'movies',
        element: <Movies />,
        children: [
          {
            path: '',
            element: <Lists />,
          },
          {
            path: 'form/:id?',
            element: <Form />,
            children: [
              {
                path: 'cast',
                element: <CastForm />
              },
              {
                path: 'cast-and-crews/:movieId?',
                element: <CastForm />
              },
              {
                path: 'photos/:movieId?',
                element: <PhotoForm />
              },
              {
                path: 'videos/:movieId?',
                element: <VideoForm />
              },
            ]
          },
        ]
      },
    ],
  },
  {
    path: '/home',
    element: <Client />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'movie/:movieId?',
        element: <Movie />
      }
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
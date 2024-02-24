import { createBrowserRouter } from 'react-router-dom';
import Login from '../view/Login';
import Layout from '../view/Layout';
import Empresas from '../view/Empresas';
import Categorias from '../view/Categorias';
import SubCategorias from '../view/SubCategorias';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/business',
        element: <Empresas />,
      },
      {
        path: '/category',
        element: <Categorias />,
      },
      {
        path: '/subcategoria',
        element: <SubCategorias />,
      },
    ],
  },
]);

export default router;

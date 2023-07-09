import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Categories from '../Components/Categories/Categories'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children : [
      {
        path: '/',
        element: <Categories></Categories>
      }
    ]
  },
])

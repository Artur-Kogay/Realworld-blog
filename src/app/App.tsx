import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './globals/App.scss'
import Layout from './layout'
import {routes} from './providers'
import {UserProvider} from './providers'
import {ArticlesProvider} from './providers'
import { NotFoundPage } from '@/pages'

function App() {
  
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: routes,
      errorElement: <NotFoundPage />
    }
  ])

  return (
      <UserProvider>
        <ArticlesProvider>
          <RouterProvider router={router} />
        </ArticlesProvider>
      </UserProvider>
  )
}

export default App

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { UseStatePage } from '../pages/UseStatePage'
import { UseEffectPage } from '../pages/useEffectPage'
import { UseContextPage } from '../pages/UseContextPage'



// 1. Define your routes as an array of objects
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Your main layout is the parent
    children: [
      {
        path: '/useState',
        element: <UseStatePage />,
      },
      {
        path: '/useEffect',
        element: <UseEffectPage />,
      },
      {
        path: '/useContext',
        element: <UseContextPage />,
      },
    ],
  },
]);

function App() {

  return (
	<div className="min-h-screen text-gray-500">
		<RouterProvider router={router} />
	</div>

  )
}

export default App

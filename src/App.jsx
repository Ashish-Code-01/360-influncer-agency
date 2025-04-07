import About from "./views/About.jsx"
import Home from "./views/Home.jsx"
import Services from "./views/Service.jsx"
import Portfolio from "./views/Portfolio.jsx"
import Contactus from "./views/Contactus.jsx"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/services',
    element: <Services />
  },
  {
    path: '/portfolis',
    element: <Portfolio />
  },
  {
    path: '/contactus',
    element: <Contactus />
  },

])
function App() {

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}
export default App

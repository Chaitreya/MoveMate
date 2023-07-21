import LoginForm from './pages/LoginForm.jsx'
import RegisterForm from './pages/RegisterForm.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from './pages/Dashbord/Navbar.jsx'
import CreateE from './pages/Dashbord/CreateE.jsx'
import Read from './pages/Dashbord/Read.jsx'
import Update from './pages/Dashbord/Update.jsx'



const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/register",
    element: <RegisterForm />
  },
  {
    path: "/",
    element: <Home />
  },{
    path:"/about",
    element:<About/>
  },{
    path:'/crud',
    element:<Navbar/>,
    children:[{
        path:"/crud/create",
        element:<CreateE/>
    },{
        path:"/crud/read",
        element:<Read/>
    },{
        path:"/crud/update/:id",
        element:<Update/>
    }]
  }

]);

function App() {
  return (
    <RouterProvider router={router} />

  )
}

export default App

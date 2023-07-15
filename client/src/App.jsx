import LoginForm from './pages/LoginForm.jsx'
import RegisterForm from './pages/RegisterForm.jsx'
import Home from './pages/Home.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"



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
  }

]);

function App() {
  return (
    <RouterProvider router={router} />

  )
}

export default App

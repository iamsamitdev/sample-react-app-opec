import { createBrowserRouter, RouterProvider } from "react-router"

// Frontend Layouts
import FrontLayout from "@/layouts/FrontLayout"
// Auth Layouts
import AuthLayout from "@/layouts/AuthLayout"

// Frontend Pages
import Home from "@/pages/Home"
import About from "@/pages/About"
import Service from "@/pages/Service"
import Contact from "@/pages/Contact"
import Login from "@/pages/auth/Login"
import Register from "@/pages/auth/Register"
import ForgotPassword from "@/pages/auth/ForgotPassword"

const router = createBrowserRouter([
    // Front Layouts Routes
    {
        path: "/",
        element: <FrontLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "service",
                element: <Service />
            },
            {
                path: "contact",
                element: <Contact />
            }
        ]
    },
    // Auth Layouts Routes
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "forgot-password",
                element: <ForgotPassword />
            }
        ]
    }
])

export const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}
import { createBrowserRouter, RouterProvider } from "react-router"

// Frontend Layouts
import FrontLayout from "@/layouts/FrontLayout"
// Auth Layouts
import AuthLayout from "@/layouts/AuthLayout"
// Admin Layouts
import AdminLayout from "@/layouts/AdminLayout"

// Frontend Pages
import Home from "@/pages/Home"
import About from "@/pages/About"
import Service from "@/pages/Service"
import Contact from "@/pages/Contact"

// Auth Pages
import Login from "@/pages/auth/Login"
import Register from "@/pages/auth/Register"
import ForgotPassword from "@/pages/auth/ForgotPassword"

// Admin Pages
import Dashboard from "@/pages/admin/Dashboard"
import Products from "@/pages/admin/Products"
import Categories from "@/pages/admin/Categories"
import Stock from "@/pages/admin/Stock"
import Report from "@/pages/admin/Report"
import Profile from "@/pages/admin/Profile"
import Setting from "@/pages/admin/Setting"

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
    },
    // Admin Layouts Routes
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: "products",
                element: <Products />
            },
            {
                path: "categories",
                element: <Categories />
            },
            {
                path: "stock",
                element: <Stock />
            },
            {
                path: "reports",
                element: <Report />
            },
            {
                path: "profile",
                element: <Profile />
            },
            {
                path: "settings",
                element: <Setting />
            }
        ]
    }
])

export const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}
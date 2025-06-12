import { createBrowserRouter, RouterProvider } from "react-router"
import MainLayout from "@/layouts/FrontLayout"
import Home from "@/pages/Home"
import About from "@/pages/About"
import Service from "@/pages/Service"
import Contact from "@/pages/Contact"

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
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
    }
])

export const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}
import { Outlet } from "react-router"
import Navbar from "@/components/front/Navbar"
import Footer from "@/components/front/Footer"

function FrontLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default FrontLayout 
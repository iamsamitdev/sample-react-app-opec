import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default MainLayout
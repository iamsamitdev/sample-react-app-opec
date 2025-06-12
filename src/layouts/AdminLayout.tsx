import { useState } from "react"
import { Outlet } from "react-router"
import AdminSidebar from "@/components/admin/Sidebar"
import AdminHeader from "@/components/admin/Header"

function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)}></div>
        <div className="fixed inset-y-0 left-0 flex w-64 flex-col">
          <AdminSidebar onClose={() => setSidebarOpen(false)} />
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col">
        <AdminSidebar />
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        <AdminHeader onMenuClick={() => setSidebarOpen(true)} />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout 
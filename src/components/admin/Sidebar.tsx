import { NavLink } from 'react-router'
import { Package2, Home, Package, Tags, BarChart3, FileText, Settings, X, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface AdminSidebarProps {
  onClose?: () => void
}

function AdminSidebar({ onClose }: AdminSidebarProps) {
  const navigation = [
    { name: 'แดชบอร์ด', href: '/admin', icon: Home },
    { name: 'สินค้า', href: '/admin/products', icon: Package },
    { name: 'หมวดหมู่', href: '/admin/categories', icon: Tags },
    { name: 'สต็อก', href: '/admin/stock', icon: BarChart3 },
    { name: 'รายงาน', href: '/admin/reports', icon: FileText },
    { name: 'ตั้งค่า', href: '/admin/settings', icon: Settings },
  ]

  return (
    <div className="flex h-full flex-col bg-white border-r border-gray-200">
      {/* Header */}
      <div className="flex h-16 items-center justify-between px-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Package2 className="h-8 w-8 text-blue-600" />
          <span className="text-lg font-bold text-gray-900">จัดการคลังสินค้า</span>
        </div>
        {onClose && (
          <Button variant="ghost" size="icon" onClick={onClose} className="lg:hidden">
            <X className="h-5 w-5" />
          </Button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-4 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.name}
              to={item.href}
              end={item.href === '/admin'}
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors [&.active]:bg-blue-100 [&.active]:text-blue-700"
              onClick={onClose}
            >
              <Icon className="h-5 w-5" />
              {item.name}
            </NavLink>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <Button variant="ghost" className="w-full justify-start gap-3 text-red-600 hover:bg-red-50 hover:text-red-700">
          <LogOut className="h-5 w-5" />
          ออกจากระบบ
        </Button>
      </div>
    </div>
  )
}

export default AdminSidebar 
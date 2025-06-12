import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Package, 
  AlertTriangle, 
  TrendingUp, 
  TrendingDown,
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  Eye,
  BarChart3,
  RefreshCw,
  Download,
  Upload,
  CheckCircle,
  XCircle,
} from 'lucide-react'

function Stock() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [stockFilter, setStockFilter] = useState('all')

  // Mock data for stock overview
  const stockOverview = [
    {
      title: 'สินค้าทั้งหมด',
      value: '2,847',
      change: '+156',
      trend: 'up',
      icon: Package,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'สินค้าใกล้หมด',
      value: '23',
      change: '+5',
      trend: 'up',
      icon: AlertTriangle,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      title: 'สินค้าหมด',
      value: '8',
      change: '-2',
      trend: 'down',
      icon: XCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      title: 'มูลค่าสต็อก',
      value: '฿8.2M',
      change: '+12.5%',
      trend: 'up',
      icon: BarChart3,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    }
  ]

  // Mock data for stock items
  const stockItems = [
    {
      id: 'SKU001',
      name: 'iPhone 15 Pro Max 256GB',
      category: 'อิเล็กทรอนิกส์',
      currentStock: 45,
      minStock: 10,
      maxStock: 100,
      price: 45900,
      status: 'in_stock',
      lastUpdated: '2024-01-15',
      supplier: 'Apple Thailand'
    },
    {
      id: 'SKU002',
      name: 'Samsung Galaxy S24 Ultra',
      category: 'อิเล็กทรอนิกส์',
      currentStock: 8,
      minStock: 15,
      maxStock: 80,
      price: 42900,
      status: 'low_stock',
      lastUpdated: '2024-01-14',
      supplier: 'Samsung Electronics'
    },
    {
      id: 'SKU003',
      name: 'MacBook Air M3 13"',
      category: 'คอมพิวเตอร์',
      currentStock: 0,
      minStock: 5,
      maxStock: 30,
      price: 39900,
      status: 'out_of_stock',
      lastUpdated: '2024-01-13',
      supplier: 'Apple Thailand'
    },
    {
      id: 'SKU004',
      name: 'AirPods Pro 2nd Gen',
      category: 'อุปกรณ์เสริม',
      currentStock: 125,
      minStock: 20,
      maxStock: 150,
      price: 8900,
      status: 'in_stock',
      lastUpdated: '2024-01-15',
      supplier: 'Apple Thailand'
    },
    {
      id: 'SKU005',
      name: 'Dell XPS 13 Plus',
      category: 'คอมพิวเตอร์',
      currentStock: 12,
      minStock: 8,
      maxStock: 40,
      price: 52900,
      status: 'in_stock',
      lastUpdated: '2024-01-14',
      supplier: 'Dell Technologies'
    }
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'in_stock':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircle className="h-3 w-3" />
            มีสินค้า
          </span>
        )
      case 'low_stock':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
            <AlertTriangle className="h-3 w-3" />
            ใกล้หมด
          </span>
        )
      case 'out_of_stock':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <XCircle className="h-3 w-3" />
            หมดสต็อก
          </span>
        )
      default:
        return null
    }
  }

  const getStockLevel = (current: number, max: number) => {
    const percentage = (current / max) * 100
    let color = 'bg-green-500'
    if (percentage < 20) color = 'bg-red-500'
    else if (percentage < 40) color = 'bg-orange-500'
    
    return (
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className={`h-2 rounded-full ${color}`} 
          style={{ width: `${Math.min(percentage, 100)}%` }}
        ></div>
      </div>
    )
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">จัดการสต็อก</h1>
          <p className="text-gray-600 mt-1">ติดตามและจัดการสินค้าคงคลัง</p>
        </div>
        
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Upload className="h-4 w-4" />
            นำเข้า
          </Button>
          
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            ส่งออก
          </Button>
          
          <Button className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Plus className="h-4 w-4" />
            เพิ่มสินค้า
          </Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stockOverview.map((item, index) => {
          const IconComponent = item.icon
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{item.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-2">{item.value}</p>
                    <div className="flex items-center mt-2">
                      {item.trend === 'up' ? (
                        <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-red-600 mr-1" />
                      )}
                      <span className={`text-sm font-medium ${item.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        {item.change}
                      </span>
                    </div>
                  </div>
                  <div className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center`}>
                    <IconComponent className={`h-6 w-6 ${item.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="ค้นหาสินค้า..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">ทุกหมวดหมู่</option>
              <option value="อิเล็กทรอนิกส์">อิเล็กทรอนิกส์</option>
              <option value="คอมพิวเตอร์">คอมพิวเตอร์</option>
              <option value="อุปกรณ์เสริม">อุปกรณ์เสริม</option>
            </select>
            
            <select 
              value={stockFilter}
              onChange={(e) => setStockFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">ทุกสถานะ</option>
              <option value="in_stock">มีสินค้า</option>
              <option value="low_stock">ใกล้หมด</option>
              <option value="out_of_stock">หมดสต็อก</option>
            </select>
            
            <Button variant="outline" className="gap-2">
              <RefreshCw className="h-4 w-4" />
              รีเฟรช
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stock Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl">รายการสินค้า</CardTitle>
              <CardDescription>จัดการสินค้าคงคลังทั้งหมด</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-4 w-4" />
              ตัวกรองเพิ่มเติม
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">รหัสสินค้า</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">ชื่อสินค้า</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">หมวดหมู่</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">สต็อกปัจจุบัน</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">ระดับสต็อก</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">ราคา</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">สถานะ</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">การจัดการ</th>
                </tr>
              </thead>
              <tbody>
                {stockItems.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <span className="font-mono text-sm text-gray-600">{item.id}</span>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.supplier}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">
                        {item.category}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-center">
                        <span className="text-lg font-semibold text-gray-900">{item.currentStock}</span>
                        <p className="text-xs text-gray-500">Min: {item.minStock} | Max: {item.maxStock}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="w-20">
                        {getStockLevel(item.currentStock, item.maxStock)}
                        <p className="text-xs text-gray-500 mt-1">
                          {Math.round((item.currentStock / item.maxStock) * 100)}%
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="font-semibold text-gray-900">
                        ฿{item.price.toLocaleString()}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      {getStatusBadge(item.status)}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-red-600 hover:text-red-700">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <p className="text-sm text-gray-600">
              แสดง 1-5 จาก 2,847 รายการ
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>
                ก่อนหน้า
              </Button>
              <Button variant="outline" size="sm" className="bg-blue-50 text-blue-600">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                ถัดไป
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Stock
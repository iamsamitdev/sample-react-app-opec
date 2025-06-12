import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Edit,
  Save,
  Camera,
  Shield,
  Key,
  Bell,
  Globe
} from 'lucide-react'

function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    fullName: 'สมชาย ใจดี',
    email: 'somchai@smartstore.com',
    phone: '081-234-5678',
    position: 'ผู้ดูแลระบบ',
    department: 'เทคโนโลยีสารสนเทศ',
    address: '123 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพฯ 10110',
    joinDate: '15 มกราคม 2022',
    lastLogin: '16 มกราคม 2024 - 14:30'
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSave = () => {
    setIsEditing(false)
    // Here you would typically save to backend
    console.log('Saving profile data:', formData)
  }

  const stats = [
    {
      title: 'วันที่เข้าร่วม',
      value: formData.joinDate,
      icon: Calendar,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'เข้าสู่ระบบล่าสุด',
      value: formData.lastLogin,
      icon: Shield,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'สถานะบัญชี',
      value: 'ใช้งานได้',
      icon: User,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">โปรไฟล์</h1>
          <p className="text-gray-600 mt-1">จัดการข้อมูลส่วนตัวและการตั้งค่าบัญชี</p>
        </div>
        
        <div className="flex gap-3">
          {isEditing ? (
            <>
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                ยกเลิก
              </Button>
              <Button onClick={handleSave} className="gap-2">
                <Save className="h-4 w-4" />
                บันทึก
              </Button>
            </>
          ) : (
            <Button onClick={() => setIsEditing(true)} className="gap-2">
              <Edit className="h-4 w-4" />
              แก้ไขข้อมูล
            </Button>
          )}
        </div>
      </div>

      {/* Profile Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card className="lg:col-span-1">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {formData.fullName.charAt(0)}
                </div>
                <Button 
                  size="icon" 
                  variant="outline" 
                  className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-white"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{formData.fullName}</h3>
              <p className="text-gray-600 mb-2">{formData.position}</p>
              <p className="text-sm text-gray-500">{formData.department}</p>
              
              <div className="flex gap-2 mt-4">
                <Button size="sm" variant="outline" className="gap-2">
                  <Key className="h-4 w-4" />
                  เปลี่ยนรหัสผ่าน
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                      <IconComponent className={`h-5 w-5 ${stat.color}`} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-sm text-gray-900 mt-1">{stat.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Profile Information */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-blue-600" />
              ข้อมูลส่วนตัว
            </CardTitle>
            <CardDescription>ข้อมูลพื้นฐานของบัญชีผู้ใช้</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">ชื่อ-นามสกุล</label>
              {isEditing ? (
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              ) : (
                <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-md">
                  <User className="h-4 w-4 text-gray-400" />
                  <span>{formData.fullName}</span>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">อีเมล</label>
              {isEditing ? (
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              ) : (
                <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-md">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span>{formData.email}</span>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">เบอร์โทรศัพท์</label>
              {isEditing ? (
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              ) : (
                <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-md">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span>{formData.phone}</span>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">ตำแหน่ง</label>
              {isEditing ? (
                <input
                  type="text"
                  value={formData.position}
                  onChange={(e) => handleInputChange('position', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              ) : (
                <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-md">
                  <Shield className="h-4 w-4 text-gray-400" />
                  <span>{formData.position}</span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-green-600" />
              ข้อมูลติดต่อ
            </CardTitle>
            <CardDescription>ที่อยู่และข้อมูลการติดต่อ</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">แผนก</label>
              {isEditing ? (
                <input
                  type="text"
                  value={formData.department}
                  onChange={(e) => handleInputChange('department', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              ) : (
                <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-md">
                  <Globe className="h-4 w-4 text-gray-400" />
                  <span>{formData.department}</span>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">ที่อยู่</label>
              {isEditing ? (
                <textarea
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              ) : (
                <div className="flex items-start gap-2 p-2 bg-gray-50 rounded-md">
                  <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                  <span className="text-sm">{formData.address}</span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>การดำเนินการด่วน</CardTitle>
          <CardDescription>การตั้งค่าและการจัดการบัญชีที่ใช้บ่อย</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-16 flex-col gap-2">
              <Key className="h-5 w-5" />
              เปลี่ยนรหัสผ่าน
            </Button>
            <Button variant="outline" className="h-16 flex-col gap-2">
              <Bell className="h-5 w-5" />
              ตั้งค่าการแจ้งเตือน
            </Button>
            <Button variant="outline" className="h-16 flex-col gap-2">
              <Shield className="h-5 w-5" />
              ความปลอดภัย
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Profile
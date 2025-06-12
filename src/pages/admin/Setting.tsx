import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Bell, 
  Shield, 
  Globe, 
  Palette,
  Database,
  Mail,
  Monitor,
  Smartphone,
  Save,
  RefreshCw,
  Download,
  Upload,
} from 'lucide-react'

function Setting() {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: true,
    desktop: true
  })

  const [security, setSecurity] = useState({
    twoFactor: false,
    sessionTimeout: '30',
    passwordExpiry: '90'
  })

  const [system, setSystem] = useState({
    language: 'th',
    timezone: 'Asia/Bangkok',
    dateFormat: 'DD/MM/YYYY',
    currency: 'THB'
  })

  const [appearance, setAppearance] = useState({
    theme: 'light',
    sidebarCollapsed: false,
    compactMode: false
  })

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const handleSecurityChange = (key: string, value: string | boolean) => {
    setSecurity(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const handleSystemChange = (key: string, value: string) => {
    setSystem(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const handleAppearanceChange = (key: string, value: string | boolean) => {
    setAppearance(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const settingsSections = [
    {
      title: 'การแจ้งเตือน',
      description: 'จัดการการแจ้งเตือนและการสื่อสาร',
      icon: Bell,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'ความปลอดภัย',
      description: 'การตั้งค่าความปลอดภัยและการเข้าถึง',
      icon: Shield,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'ระบบ',
      description: 'การตั้งค่าระบบและการแสดงผล',
      icon: Globe,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'รูปแบบ',
      description: 'ธีมและการแสดงผลของระบบ',
      icon: Palette,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">ตั้งค่า</h1>
          <p className="text-gray-600 mt-1">จัดการการตั้งค่าระบบและการปรับแต่งต่างๆ</p>
        </div>
        
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <RefreshCw className="h-4 w-4" />
            รีเซ็ต
          </Button>
          
          <Button className="gap-2">
            <Save className="h-4 w-4" />
            บันทึกการตั้งค่า
          </Button>
        </div>
      </div>

      {/* Settings Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {settingsSections.map((section, index) => {
          const IconComponent = section.icon
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 ${section.bgColor} rounded-lg flex items-center justify-center`}>
                    <IconComponent className={`h-5 w-5 ${section.color}`} />
                  </div>
                  <h3 className="font-semibold text-gray-900">{section.title}</h3>
                </div>
                <p className="text-sm text-gray-600">{section.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Settings Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Notifications Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-blue-600" />
              การแจ้งเตือน
            </CardTitle>
            <CardDescription>เลือกประเภทการแจ้งเตือนที่ต้องการรับ</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <div>
                  <p className="font-medium">อีเมล</p>
                  <p className="text-sm text-gray-500">รับการแจ้งเตือนทางอีเมล</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications.email}
                  onChange={(e) => handleNotificationChange('email', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Monitor className="h-4 w-4 text-gray-400" />
                <div>
                  <p className="font-medium">เดสก์ท็อป</p>
                  <p className="text-sm text-gray-500">แจ้งเตือนบนเดสก์ท็อป</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications.desktop}
                  onChange={(e) => handleNotificationChange('desktop', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Smartphone className="h-4 w-4 text-gray-400" />
                <div>
                  <p className="font-medium">SMS</p>
                  <p className="text-sm text-gray-500">รับ SMS แจ้งเตือน</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications.sms}
                  onChange={(e) => handleNotificationChange('sms', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-600" />
              ความปลอดภัย
            </CardTitle>
            <CardDescription>การตั้งค่าความปลอดภัยและการยืนยันตัวตน</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">การยืนยันตัวตนแบบ 2 ขั้นตอน</p>
                <p className="text-sm text-gray-500">เพิ่มความปลอดภัยด้วย OTP</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={security.twoFactor}
                  onChange={(e) => handleSecurityChange('twoFactor', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                หมดเวลาเซสชัน (นาที)
              </label>
              <select
                value={security.sessionTimeout}
                onChange={(e) => handleSecurityChange('sessionTimeout', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                <option value="15">15 นาที</option>
                <option value="30">30 นาที</option>
                <option value="60">1 ชั่วโมง</option>
                <option value="120">2 ชั่วโมง</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                รหัสผ่านหมดอายุ (วัน)
              </label>
              <select
                value={security.passwordExpiry}
                onChange={(e) => handleSecurityChange('passwordExpiry', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                <option value="30">30 วัน</option>
                <option value="60">60 วัน</option>
                <option value="90">90 วัน</option>
                <option value="180">180 วัน</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* System Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-purple-600" />
              ระบบ
            </CardTitle>
            <CardDescription>การตั้งค่าภาษา เขตเวลา และรูปแบบ</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">ภาษา</label>
              <select
                value={system.language}
                onChange={(e) => handleSystemChange('language', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="th">ไทย</option>
                <option value="en">English</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">เขตเวลา</label>
              <select
                value={system.timezone}
                onChange={(e) => handleSystemChange('timezone', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="Asia/Bangkok">เอเชีย/กรุงเทพ (GMT+7)</option>
                <option value="UTC">UTC (GMT+0)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">รูปแบบวันที่</label>
              <select
                value={system.dateFormat}
                onChange={(e) => handleSystemChange('dateFormat', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="DD/MM/YYYY">วว/ดด/ปปปป</option>
                <option value="MM/DD/YYYY">ดด/วว/ปปปป</option>
                <option value="YYYY-MM-DD">ปปปป-วว-ดด</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">สกุลเงิน</label>
              <select
                value={system.currency}
                onChange={(e) => handleSystemChange('currency', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="THB">บาท (THB)</option>
                <option value="USD">ดอลลาร์ (USD)</option>
                <option value="EUR">ยูโร (EUR)</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Appearance Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5 text-orange-600" />
              รูปแบบ
            </CardTitle>
            <CardDescription>ธีมและการแสดงผลของระบบ</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">ธีม</label>
              <select
                value={appearance.theme}
                onChange={(e) => handleAppearanceChange('theme', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="light">สว่าง</option>
                <option value="dark">มืด</option>
                <option value="auto">อัตโนมัติ</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">ย่อ Sidebar</p>
                <p className="text-sm text-gray-500">ย่อเมนูด้านข้างโดยอัตโนมัติ</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={appearance.sidebarCollapsed}
                  onChange={(e) => handleAppearanceChange('sidebarCollapsed', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">โหมดกะทัดรัด</p>
                <p className="text-sm text-gray-500">แสดงข้อมูลแบบกะทัดรัด</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={appearance.compactMode}
                  onChange={(e) => handleAppearanceChange('compactMode', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
              </label>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Data Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5 text-indigo-600" />
            จัดการข้อมูล
          </CardTitle>
          <CardDescription>สำรองข้อมูล นำเข้า และส่งออกข้อมูล</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Download className="h-5 w-5" />
              สำรองข้อมูล
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Upload className="h-5 w-5" />
              นำเข้าข้อมูล
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <RefreshCw className="h-5 w-5" />
              รีเซ็ตระบบ
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Setting
import { useState } from 'react'
import { NavLink } from 'react-router'
import { Button } from '@/components/ui/button'
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { EyeOff, Mail, Lock, ArrowRight, Eye } from 'lucide-react'
import Swal from 'sweetalert2'

function Login() {

    // สร้างตัวแปร state สำหรับแสดงรหัสผ่าน
    // showPassword คือชื่อ state
    // setShowPassword คือฟังก์ชันสำหรับเปลี่ยนค่า state
    const [showPassword, setShowPassword] = useState(false)

    // สร้างตัวแปร state สำหรับเก็บข้อมูลอีเมลและรหัสผ่าน
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    // สร้างฟังก์ชัน submitForm สำหรับจัดการการส่งฟอร์ม
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault() // ป้องกันการรีเฟรชหน้าเว็บ
        console.log('Form submitted:', formData) // แสดงข้อมูลฟอร์มในคอนโซล
        if (formData.email == "admin@email.com" && formData.password == "123456") {
            // แสดงข้อความยืนยันการเข้าสู่ระบบสำเร็จ
            Swal.fire({
                title: 'เข้าสู่ระบบสำเร็จ',
                text: 'ยินดีต้อนรับกลับ!',
                icon: 'success',
                confirmButtonText: 'ตกลง'
            }).then(() => {
                // นำทางไปยังหน้าแดชบอร์ดหลังจากกดยืนยัน
                window.location.href = '/admin';
            });
        } else {
            // แสดงข้อความเตือนหากข้อมูลไม่ถูกต้อง
            Swal.fire({
                title: 'เข้าสู่ระบบล้มเหลว',
                text: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง',
                icon: 'error',
                confirmButtonText: 'ลองอีกครั้ง'
            });
        }
    }

    // สร้างฟังก์ชันสำหรับจัดการการเปลี่ยนแปลงข้อมูลในฟอร์ม
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value // อัปเดตค่าใน formData ตามชื่อ input
        })
    }

  return (
    <>
      <CardHeader className="text-center pb-8">
        <CardTitle className="text-3xl font-bold text-gray-900 mb-2">ยินดีต้อนรับกลับ</CardTitle>
        <CardDescription className="text-gray-600 text-lg">
          เข้าสู่ระบบเพื่อจัดการสินค้าคลังของคุณ
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Mail className="h-4 w-4 text-blue-600" />
              อีเมล
            </label>
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-400"
                placeholder="กรอกอีเมลของคุณ"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Lock className="h-4 w-4 text-blue-600" />
              รหัสผ่าน
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-400"
                placeholder="กรอกรหัสผ่านของคุณ"
                value={formData.password}
                onChange={handleInputChange}
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded transition-colors"
              />
              <span className="ml-3 text-sm text-gray-600">จดจำการเข้าสู่ระบบ</span>
            </label>
            <NavLink
              to="/auth/forgot-password"
              className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              ลืมรหัสผ่าน?
            </NavLink>
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            เข้าสู่ระบบ
            <ArrowRight className="h-5 w-5" />
          </Button>
        </form>

        {/* Divider */}
        <div className="my-8 flex items-center">
          <div className="flex-1 border-t border-gray-200"></div>
          <span className="px-4 text-sm text-gray-500 font-medium">หรือเข้าสู่ระบบด้วย</span>
          <div className="flex-1 border-t border-gray-200"></div>
        </div>

        {/* Social Login */}
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="w-full py-3 border-2 border-gray-200 hover:border-gray-300 rounded-xl transition-all duration-300 hover:shadow-md">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Google
          </Button>
          <Button variant="outline" className="w-full py-3 border-2 border-gray-200 hover:border-gray-300 rounded-xl transition-all duration-300 hover:shadow-md">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Facebook
          </Button>
        </div>

        {/* Sign Up Link */}
        <div className="mt-8 text-center">
          <span className="text-gray-600">
            ยังไม่มีบัญชี?{' '}
            <NavLink
              to="/auth/register"
              className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              สมัครสมาชิก
            </NavLink>
          </span>
        </div>
      </CardContent>
    </>
  )
}

export default Login 
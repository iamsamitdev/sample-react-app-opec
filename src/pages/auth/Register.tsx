import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { NavLink } from 'react-router'
import { Button } from '@/components/ui/button'
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Eye, EyeOff, Mail, Lock, User, UserPlus, Phone, Shield } from 'lucide-react'
import Swal from 'sweetalert2'
import { authRegister, type RegisterData } from '@/services/apiAuth'

function Register() {
  const [showPassword, setShowPassword] = useState(false)
  
  // การใช้ useForm hook จาก react-hook-form
  const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterData>()

  // สร้างฟังก์ชัน submit handler
  const onSubmit = async (data: RegisterData) => {
    console.log('Form Data:', data)
    // ส่งข้อมูลไปยัง API
    authRegister(data)
      .then(response => {
        if (response.data.status === true) {
          Swal.fire({
            icon: 'success',
            title: 'สมัครสมาชิกสำเร็จ',
            text: 'คุณได้สร้างบัญชีผู้ใช้เรียบร้อยแล้ว',
            confirmButtonText: 'ตกลง'
          }).then(() => {
            // นำทางไปยังหน้าเข้าสู่ระบบหลังจากสมัครสมาชิกสำเร็จ
            window.location.href = '/auth/login'
          })
        }
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'เกิดข้อผิดพลาด',
          text: error.response?.data?.message || 'ไม่สามารถสมัครสมาชิกได้ในขณะนี้',
          confirmButtonText: 'ตกลง'
        })
      })
  }

  return (
    <>
      <CardHeader className="text-center pb-8">
        <CardTitle className="text-3xl font-bold text-gray-900 mb-2">สร้างบัญชีใหม่</CardTitle>
        <CardDescription className="text-gray-600 text-lg">
          เริ่มต้นใช้งานระบบจัดการสินค้าคลัง
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Row 1: Fullname and Username */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Fullname Field */}
            <div className="space-y-2">
              <label htmlFor="fullname" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <User className="h-4 w-4 text-blue-600" />
                ชื่อ-นามสกุล
              </label>
              <input
                {...register('fullname', { 
                  required: "กรุณากรอกชื่อ-นามสกุล",
                  minLength: {
                    value: 3,
                    message: "ชื่อ-นามสกุลต้องมีอย่างน้อย 3 ตัวอักษร"
                  } 
                })}
                id="fullname"
                name="fullname"
                type="text"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-400"
                placeholder="กรอกชื่อ-นามสกุล"
              />
              {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname.message}</p>}
            </div>

            {/* Username Field */}
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <User className="h-4 w-4 text-purple-600" />
                ชื่อผู้ใช้
              </label>
              <input
                {...register('username', { 
                  required: "กรุณากรอกชื่อผู้ใช้",
                  minLength: {
                    value: 3,
                    message: "ชื่อผู้ใช้ต้องมีอย่างน้อย 3 ตัวอักษร"
                  },
                  maxLength: {
                    value: 20,
                    message: "ชื่อผู้ใช้ต้องไม่เกิน 20 ตัวอักษร"
                  } 
                })}
                id="username"
                name="username"
                type="text"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-400"
                placeholder="กรอกชื่อผู้ใช้"
              />
              {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
            </div>
          </div>

          {/* Row 2: Tel and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Tel Field */}
            <div className="space-y-2">
              <label htmlFor="tel" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <Phone className="h-4 w-4 text-green-600" />
                เบอร์โทรศัพท์
              </label>
              <input
                {...register('tel', { 
                  required: "กรุณากรอกเบอร์โทรศัพท์",
                  pattern: {
                    value: /^0[0-9]{9}$/,
                    message: "กรุณากรอกเบอร์โทรศัพท์ที่ถูกต้อง (10 หลัก)"
                  } 
                })}
                id="tel"
                name="tel"
                type="tel"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-400"
                placeholder="กรอกเบอร์โทรศัพท์"
              />
              {errors.tel && <p className="text-red-500 text-sm">{errors.tel.message}</p>}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-600" />
                อีเมล
              </label>
              <input
                {...register('email', { 
                  required: "กรุณากรอกอีเมล",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "กรุณากรอกอีเมลที่ถูกต้อง"
                  } 
                })}
                id="email"
                name="email"
                type="email"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-400"
                placeholder="กรอกอีเมล"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
          </div>

          {/* Row 3: Password and Confirm Password */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <Lock className="h-4 w-4 text-blue-600" />
                รหัสผ่าน
              </label>
              <div className="relative">
                <input
                  {...register('password', { 
                    required: "กรุณากรอกรหัสผ่าน",
                    minLength: {
                      value: 6,
                      message: "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร"
                    } 
                  })}
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-400"
                  placeholder="สร้างรหัสผ่าน"
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                <button
                  type="button"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <label htmlFor="password_confirmation" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <Lock className="h-4 w-4 text-blue-600" />
                ยืนยันรหัสผ่าน
              </label>
              <div className="relative">
                <input
                  {...register("password_confirmation", {
                      required: "กรุณายืนยันรหัสผ่าน",
                      validate: (value) => value === watch("password") || "รหัสผ่านไม่ตรงกัน",
                  })}
                  id="password_confirmation"
                  name="password_confirmation"
                  type="password"
                  className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-400"
                  placeholder="ยืนยันรหัสผ่าน"
                />
                {errors.password_confirmation && <p className="text-red-500 text-sm">{errors.password_confirmation.message}</p>}
                <button
                  type="button"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Role Field - Full Width */}
          <div className="space-y-2">
            <label htmlFor="role" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Shield className="h-4 w-4 text-orange-600" />
              บทบาท
            </label>
            <select
              {...register('role', { 
                required: "กรุณาเลือกบทบาท", 
              })}
              id="role"
              name="role"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 bg-white"
            >
              <option value="">เลือกบทบาท</option>
              <option value="1">ผู้ใช้งานทั่วไป</option>
              <option value="2">ผู้ดูแลระบบ</option>
            </select>
            {errors.role && <p className="text-red-500 text-sm">{errors.role.message}</p>}
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded transition-colors mt-1"
            />
            <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
              ฉันยอมรับ{' '}
              <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                ข้อกำหนดการใช้งาน
              </a>{' '}
              และ{' '}
              <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                นโยบายความเป็นส่วนตัว
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <UserPlus className="h-5 w-5" />
            สร้างบัญชี
          </Button>
        </form>

        {/* Divider */}
        <div className="my-8 flex items-center">
          <div className="flex-1 border-t border-gray-200"></div>
          <span className="px-4 text-sm text-gray-500 font-medium">หรือสมัครด้วย</span>
          <div className="flex-1 border-t border-gray-200"></div>
        </div>

        {/* Social Registration */}
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

        {/* Sign In Link */}
        <div className="mt-8 text-center">
          <span className="text-gray-600">
            มีบัญชีอยู่แล้ว?{' '}
            <NavLink
              to="/auth/login"
              className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              เข้าสู่ระบบ
            </NavLink>
          </span>
        </div>
      </CardContent>
    </>
  )
}

export default Register 
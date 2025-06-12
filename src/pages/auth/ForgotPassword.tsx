import { NavLink } from 'react-router'
import { Button } from '@/components/ui/button'
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, ArrowLeft, Send } from 'lucide-react'

function ForgotPassword() {
  return (
    <>
      <CardHeader className="text-center pb-8">
        <CardTitle className="text-3xl font-bold text-gray-900 mb-2">ลืมรหัสผ่าน?</CardTitle>
        <CardDescription className="text-gray-600 text-lg">
          ไม่ต้องกังวล เราจะส่งคำแนะนำการรีเซ็ตให้คุณ
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form className="space-y-6">
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
              />
            </div>
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Send className="h-5 w-5" />
            ส่งคำแนะนำการรีเซ็ต
          </Button>
        </form>

        {/* Back to Login */}
        <div className="mt-8 text-center">
          <NavLink
            to="/auth/login"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            กลับไปหน้าเข้าสู่ระบบ
          </NavLink>
        </div>
      </CardContent>
    </>
  )
}

export default ForgotPassword 
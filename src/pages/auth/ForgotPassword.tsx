import { useState } from 'react'
import { NavLink } from 'react-router'
import { Button } from '@/components/ui/button'
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, ArrowLeft, Check, Send } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle forgot password logic here
    console.log('Forgot password request for:', email)
    setIsSubmitted(true)
    // Simulate sending email
    setTimeout(() => {
      console.log('Reset password email sent to:', email)
      // You can also show a success message here
      setIsSubmitted(true)
      setEmail('') // Clear email input after submission
      // Optionally, redirect to another page or show a success message
    }
    , 1000) // Simulate network delay
  }

  if (isSubmitted) {
    return (
      <>
        <CardHeader className="text-center pb-8">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center mb-6">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <CardTitle className="text-3xl font-bold text-gray-900 mb-2">ตรวจสอบอีเมลของคุณ</CardTitle>
          <CardDescription className="text-gray-600 text-lg">
            เราได้ส่งลิงก์รีเซ็ตรหัสผ่านไปยัง<br />
            <span className="font-semibold text-blue-600">{email}</span>
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="space-y-6">
            <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-gray-700 mb-3">ไม่ได้รับอีเมล? ลองตรวจสอบในโฟลเดอร์สแปม</p>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                ส่งอีกครั้ง
              </button>
            </div>

            <div className="text-center">
              <NavLink
                to="/auth/login"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                กลับไปหน้าเข้าสู่ระบบ
              </NavLink>
            </div>
          </div>
        </CardContent>
      </>
    )
  }

  return (
    <>
      <CardHeader className="text-center pb-8">
        <CardTitle className="text-3xl font-bold text-gray-900 mb-2">ลืมรหัสผ่าน?</CardTitle>
        <CardDescription className="text-gray-600 text-lg">
          ไม่ต้องกังวล เราจะส่งคำแนะนำการรีเซ็ตให้คุณ
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
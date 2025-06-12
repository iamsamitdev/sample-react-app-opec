import { Outlet } from "react-router"
import { Package2, Sparkles, Shield, TrendingUp, Users } from "lucide-react"

function AuthLayout() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image and Content */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-white to-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-tl from-purple-200 to-pink-200 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl opacity-50"></div>
        </div>

        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1920&h=1080&fit=crop')"
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-12 py-16 text-white">
          {/* Brand */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <Package2 className="h-12 w-12 text-white" />
                <Sparkles className="h-5 w-5 text-yellow-300 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <span className="text-3xl font-bold">Smart Store</span>
            </div>
            <p className="text-xl text-blue-100 leading-relaxed">
              ระบบจัดการสินค้าคลังที่ทันสมัย<br />
              เพื่อธุรกิจที่เติบโตอย่างยั่งยืน
            </p>
          </div>

          {/* Features */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">ความปลอดภัยสูง</h3>
                <p className="text-blue-100">ระบบรักษาความปลอดภัยระดับธนาคาร</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">วิเคราะห์ข้อมูลแบบเรียลไทม์</h3>
                <p className="text-blue-100">ติดตามสถานะสินค้าและยอดขายได้ทันที</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">ทีมงานมืออาชีพ</h3>
                <p className="text-blue-100">สนับสนุนและให้คำปรึกษา 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-2xl">
          {/* Mobile Brand (visible only on mobile) */}
          <div className="lg:hidden text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="relative">
                <Package2 className="h-10 w-10 text-blue-600" />
                <Sparkles className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Smart Store
              </span>
            </div>
            <p className="text-gray-600">ระบบจัดการสินค้าคลังที่ทันสมัย</p>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 border border-gray-100">
            <Outlet />
          </div>

          {/* Footer */}
          <div className="text-center mt-8 text-gray-500 text-sm">
            © 2025 Smart Store. สงวนลิขสิทธิ์ทุกส่วน
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout 
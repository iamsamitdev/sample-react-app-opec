import * as React from 'react'
import { NavLink } from 'react-router'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuItem,
} from '@/components/ui/navigation-menu'
import { Package2, Menu, LogIn, Sparkles, X } from 'lucide-react'

function FrontNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  return (
    <>
      <nav className="w-full border-b-2 border-gradient-to-r from-blue-500 to-purple-600 backdrop-blur-md bg-white/90 z-50 sticky top-0 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Brand Name - ทางซ้าย */}
            <div className="flex items-center gap-3 group">
              <div className="relative">
                <Package2 className="h-10 w-10 text-blue-600 group-hover:text-purple-600 transition-all duration-300 group-hover:scale-110" />
                <Sparkles className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <NavLink 
                to="/" 
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent hover:from-purple-600 hover:via-blue-600 hover:to-purple-800 transition-all duration-300"
              >
                Smart Store
              </NavLink>
            </div>

            {/* Navigation Menu - ตรงกลาง (Desktop) */}
            <div className="hidden md:flex">
              <NavigationMenu>
                <NavigationMenuList className="gap-1 bg-gray-50/80 backdrop-blur-sm rounded-xl p-2 shadow-inner">
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <NavLink
                        to="/"
                        className="relative px-6 py-3 text-sm font-semibold text-gray-700 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 hover:shadow-md [&.active]:bg-gradient-to-r [&.active]:from-blue-500 [&.active]:to-purple-600 [&.active]:text-white [&.active]:shadow-lg transform hover:scale-105"
                      >
                        <span className="relative z-10">หน้าแรก</span>
                      </NavLink>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <NavLink
                        to="/about"
                        className="relative px-6 py-3 text-sm font-semibold text-gray-700 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 hover:shadow-md [&.active]:bg-gradient-to-r [&.active]:from-blue-500 [&.active]:to-purple-600 [&.active]:text-white [&.active]:shadow-lg transform hover:scale-105"
                      >
                        <span className="relative z-10">เกี่ยวกับเรา</span>
                      </NavLink>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <NavLink
                        to="/service"
                        className="relative px-6 py-3 text-sm font-semibold text-gray-700 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 hover:shadow-md [&.active]:bg-gradient-to-r [&.active]:from-blue-500 [&.active]:to-purple-600 [&.active]:text-white [&.active]:shadow-lg transform hover:scale-105"
                      >
                        <span className="relative z-10">บริการ</span>
                      </NavLink>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <NavLink
                        to="/contact"
                        className="relative px-6 py-3 text-sm font-semibold text-gray-700 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 hover:shadow-md [&.active]:bg-gradient-to-r [&.active]:from-blue-500 [&.active]:to-purple-600 [&.active]:text-white [&.active]:shadow-lg transform hover:scale-105"
                      >
                        <span className="relative z-10">ติดต่อเรา</span>
                      </NavLink>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Desktop Login Button */}
            <div className="hidden md:flex items-center gap-3">
              <Button 
                asChild 
                variant="default" 
                size="lg" 
                className="gap-2 rounded bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <NavLink to="/auth/login">
                  <LogIn className="h-5 w-5" />
                  เข้าสู่ระบบ
                </NavLink>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="h-12 w-12 p-0 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-300 hover:shadow-md"
              >
                {isMobileMenuOpen ? (
                  <X className="h-7 w-7" />
                ) : (
                  <Menu className="h-7 w-7" />
                )}
                <span className="sr-only">Toggle mobile menu</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Background Overlay */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div className="fixed inset-x-0 top-0 bg-gradient-to-br from-white via-blue-50 to-purple-50 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Package2 className="h-8 w-8 text-blue-600" />
                  <Sparkles className="h-3 w-3 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Smart Store
                </span>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="h-10 w-10 p-0 text-gray-700 hover:bg-gray-100 rounded-xl"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Navigation Links */}
            <div className="p-6 space-y-4">
              <NavLink
                to="/"
                className="flex items-center w-full px-6 py-4 text-lg font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 rounded-2xl transition-all duration-300 [&.active]:bg-gradient-to-r [&.active]:from-blue-500 [&.active]:to-purple-600 [&.active]:text-white [&.active]:shadow-lg transform hover:scale-105"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="w-3 h-3 bg-blue-400 rounded-full mr-4"></span>
                หน้าแรก
              </NavLink>
              
              <NavLink
                to="/about"
                className="flex items-center w-full px-6 py-4 text-lg font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 rounded-2xl transition-all duration-300 [&.active]:bg-gradient-to-r [&.active]:from-blue-500 [&.active]:to-purple-600 [&.active]:text-white [&.active]:shadow-lg transform hover:scale-105"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="w-3 h-3 bg-purple-400 rounded-full mr-4"></span>
                เกี่ยวกับเรา
              </NavLink>
              
              <NavLink
                to="/service"
                className="flex items-center w-full px-6 py-4 text-lg font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 rounded-2xl transition-all duration-300 [&.active]:bg-gradient-to-r [&.active]:from-blue-500 [&.active]:to-purple-600 [&.active]:text-white [&.active]:shadow-lg transform hover:scale-105"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="w-3 h-3 bg-pink-400 rounded-full mr-4"></span>
                บริการ
              </NavLink>
              
              <NavLink
                to="/contact"
                className="flex items-center w-full px-6 py-4 text-lg font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 rounded-2xl transition-all duration-300 [&.active]:bg-gradient-to-r [&.active]:from-blue-500 [&.active]:to-purple-600 [&.active]:text-white [&.active]:shadow-lg transform hover:scale-105"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="w-3 h-3 bg-indigo-400 rounded-full mr-4"></span>
                ติดต่อเรา
              </NavLink>

              {/* Login Button */}
              <div className="pt-6 border-t border-gray-200">
                <NavLink
                  to="/auth/login"
                  className="flex items-center justify-center w-full px-6 py-4 text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <LogIn className="h-5 w-5 mr-3" />
                  เข้าสู่ระบบ
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default FrontNavbar 
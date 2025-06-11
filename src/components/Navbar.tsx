// rfce
import * as React from 'react'
import { NavLink } from 'react-router'
import { Button } from './ui/button'
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuItem,
} from '@/components/ui/navigation-menu'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className="w-full border-b backdrop-blur-sm bg-white/80 z-50 sticky top-0">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Brand Name - ทางซ้าย */}
          <div className="flex items-center">
            <NavLink to="/" className="text-xl font-bold text-gray-800 hover:text-gray-900 transition-colors">
              Your Logo
            </NavLink>
          </div>

          {/* Navigation Menu - ตรงกลาง (Desktop) */}
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                <NavigationMenuItem>
                  {/* สำคัญ: NavLink ต้องเป็น child ตัวเดียว ไม่มีช่องว่างหรือบรรทัดใหม่คั่น */}
                  <NavigationMenuLink asChild><NavLink
                    to="/"
                    className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors [&.active]:bg-gray-100 [&.active]:text-gray-900" // เพิ่ม active styling
                  >Home</NavLink></NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  {/* สำคัญ: NavLink ต้องเป็น child ตัวเดียว ไม่มีช่องว่างหรือบรรทัดใหม่คั่น */}
                  <NavigationMenuLink asChild><NavLink
                    to="/about"
                    className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors [&.active]:bg-gray-100 [&.active]:text-gray-900"
                  >About</NavLink></NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  {/* สำคัญ: NavLink ต้องเป็น child ตัวเดียว ไม่มีช่องว่างหรือบรรทัดใหม่คั่น */}
                  <NavigationMenuLink asChild><NavLink
                    to="/service"
                    className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors [&.active]:bg-gray-100 [&.active]:text-gray-900"
                  >Service</NavLink></NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  {/* สำคัญ: NavLink ต้องเป็น child ตัวเดียว ไม่มีช่องว่างหรือบรรทัดใหม่คั่น */}
                  <NavigationMenuLink asChild><NavLink
                    to="/contact"
                    className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors [&.active]:bg-gray-100 [&.active]:text-gray-900"
                  >Contact</NavLink></NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Get Started Button - ทางขวา */}
          <div className="flex items-center gap-2">
            <Button variant="default" size="sm" className="hidden md:inline-flex rounded-md shadow-sm">
              Get Started
            </Button>

            {/* Mobile Navigation Menu */}
            <div className="md:hidden">
              <DropdownMenu open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-10 w-10 p-0 text-gray-700 hover:bg-gray-100">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                    <span className="sr-only">Toggle mobile menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 mt-2 mr-4 p-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {/* สำคัญ: NavLink ต้องเป็น child ตัวเดียว ไม่มีช่องว่างหรือบรรทัดใหม่คั่น */}
                  <DropdownMenuItem asChild><NavLink
                      to="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors [&.active]:bg-gray-100 [&.active]:text-gray-900"
                      onClick={() => setIsMobileMenuOpen(false)}
                  >Home</NavLink></DropdownMenuItem>
                  {/* สำคัญ: NavLink ต้องเป็น child ตัวเดียว ไม่มีช่องว่างหรือบรรทัดใหม่คั่น */}
                  <DropdownMenuItem asChild><NavLink
                      to="/about"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors [&.active]:bg-gray-100 [&.active]:text-gray-900"
                      onClick={() => setIsMobileMenuOpen(false)}
                  >About</NavLink></DropdownMenuItem>
                  {/* สำคัญ: NavLink ต้องเป็น child ตัวเดียว ไม่มีช่องว่างหรือบรรทัดใหม่คั่น */}
                  <DropdownMenuItem asChild><NavLink
                      to="/service"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors [&.active]:bg-gray-100 [&.active]:text-gray-900"
                      onClick={() => setIsMobileMenuOpen(false)}
                  >Service</NavLink></DropdownMenuItem>
                  {/* สำคัญ: NavLink ต้องเป็น child ตัวเดียว ไม่มีช่องว่างหรือบรรทัดใหม่คั่น */}
                  <DropdownMenuItem asChild><NavLink
                      to="/contact"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors [&.active]:bg-gray-100 [&.active]:text-gray-900"
                      onClick={() => setIsMobileMenuOpen(false)}
                  >Contact</NavLink></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
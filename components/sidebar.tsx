"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Package, ShoppingCart, BarChart3, Menu, X, User } from "lucide-react"
import { useState } from "react"

const navItems = [
  { href: "/", label: "الرئيسية", icon: LayoutDashboard },
  { href: "/products", label: "المنتجات", icon: Package },
  { href: "/orders", label: "الطلبات", icon: ShoppingCart },
  { href: "/reports", label: "التقارير", icon: BarChart3 },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* زر القائمة للموبايل */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-3 bg-primary text-white rounded-xl shadow-lg lg:hidden"
        aria-label="فتح القائمة"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* الخلفية المعتمة للموبايل */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsOpen(false)} />}

      {/* الشريط الجانبي */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-primary text-white z-40 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:static lg:transform-none flex flex-col`}
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold text-accent mb-2">إدارة المتجر</h1>
          <p className="text-white/70 text-sm">نظام إدارة متجرك بسهولة</p>
        </div>

        <nav className="px-4 space-y-2 flex-1 pb-24">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-4 px-4 py-4 rounded-xl text-lg font-medium transition-all duration-200 ${
                  isActive ? "bg-accent text-primary" : "hover:bg-white/10 text-white/90"
                }`}
              >
                <Icon size={24} />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="p-6 border-t border-white/20 mt-auto">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-accent rounded-full">
              <User size={24} className="text-primary" />
            </div>
            <div>
              <p className="font-bold text-white">abdelrahman</p>
              <p className="text-white/70 text-sm">صاحب المتجر</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

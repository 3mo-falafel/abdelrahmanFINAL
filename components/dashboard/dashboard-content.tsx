"use client"

import { useState, useMemo } from "react"
import { StatCard } from "@/components/stat-card"
import { DollarSign, TrendingUp, Package, AlertTriangle, ShoppingCart, Clock, Search, X } from "lucide-react"
import { formatCurrency, formatDate, getOrderStatusColor, getStockStatus, getStockStatusColor } from "@/lib/types"
import type { Product, Order } from "@/lib/types"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface DashboardContentProps {
  products: Product[]
  orders: Order[]
}

export function DashboardContent({ products, orders }: DashboardContentProps) {
  const [searchQuery, setSearchQuery] = useState("")

  // حساب الإحصائيات
  const completedOrders = orders.filter((o) => o.status === "مكتمل")
  const totalSales = completedOrders.reduce((sum, o) => sum + Number(o.total_amount), 0)
  const totalProfit = completedOrders.reduce((sum, o) => sum + Number(o.total_profit), 0)
  const totalProducts = products.length
  const lowStockProducts = products.filter((p) => p.quantity <= p.low_stock_threshold).length

  // آخر الطلبات
  const recentOrders = orders.slice(0, 5)

  // المنتجات منخفضة المخزون
  const lowStockList = products.filter((p) => p.quantity <= p.low_stock_threshold).slice(0, 5)

  // البحث عن المنتجات
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null

    const query = searchQuery.trim().toLowerCase()
    return products.filter((product) => {
      const nameMatch = product.name.toLowerCase().includes(query)
      const codeMatch = product.code.toLowerCase().includes(query)
      const idMatch = product.id.toLowerCase().includes(query)
      return nameMatch || codeMatch || idMatch
    })
  }, [searchQuery, products])

  return (
    <>
      {/* العنوان وشريط البحث */}
      <div className="mb-8 pt-16 lg:pt-0">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
          <div>
            <h1 className="text-3xl font-bold text-text">مرحباً، abdelrahman</h1>
            <p className="text-text-muted mt-2">نظرة عامة على متجرك</p>
          </div>
        </div>

        <div className="relative max-w-xl">
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
          <Input
            type="text"
            placeholder="ابحث عن منتج بالاسم أو الكود أو الرقم التعريفي..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pr-12 pl-12 py-6 text-lg rounded-xl border-2 border-border focus:border-primary bg-surface"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSearchQuery("")}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-text-muted hover:text-text"
            >
              <X size={20} />
            </Button>
          )}
        </div>
      </div>

      {/* نتائج البحث */}
      {searchResults !== null && (
        <div className="mb-8 bg-surface rounded-2xl p-6 shadow-sm border border-border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-text flex items-center gap-2">
              <Search className="text-primary" size={24} />
              نتائج البحث
              <span className="text-sm font-normal text-text-muted">({searchResults.length} منتج)</span>
            </h2>
            <Button variant="outline" size="sm" onClick={() => setSearchQuery("")}>
              إغلاق
            </Button>
          </div>

          {searchResults.length === 0 ? (
            <p className="text-text-muted text-center py-8">لا توجد نتائج للبحث "{searchQuery}"</p>
          ) : (
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {searchResults.map((product) => {
                const status = getStockStatus(product.quantity, product.low_stock_threshold)
                return (
                  <Link
                    key={product.id}
                    href="/products"
                    className="flex items-center justify-between p-4 bg-background rounded-xl hover:bg-primary/5 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      {product.image_url ? (
                        <img
                          src={product.image_url || "/placeholder.svg"}
                          alt={product.name}
                          className="w-14 h-14 rounded-lg object-cover"
                        />
                      ) : (
                        <div className="w-14 h-14 rounded-lg bg-border flex items-center justify-center">
                          <Package size={24} className="text-text-muted" />
                        </div>
                      )}
                      <div>
                        <p className="font-bold text-text text-lg">{product.name}</p>
                        <p className="text-sm text-text-muted">كود: {product.code}</p>
                        <p className="text-xs text-text-muted">ID: {product.id.slice(0, 8)}...</p>
                      </div>
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-primary text-lg">{formatCurrency(product.selling_price)}</p>
                      <p className="text-sm text-text-muted">الكمية: {product.quantity}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${getStockStatusColor(status)}`}>{status}</span>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      )}

      {/* البطاقات الإحصائية */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard title="إجمالي المبيعات" value={totalSales} icon={DollarSign} isCurrency color="primary" />
        <StatCard title="إجمالي الأرباح" value={totalProfit} icon={TrendingUp} isCurrency color="success" />
        <StatCard title="عدد المنتجات" value={totalProducts} icon={Package} color="primary" />
        <StatCard
          title="منتجات منخفضة"
          value={lowStockProducts}
          icon={AlertTriangle}
          color={lowStockProducts > 0 ? "danger" : "success"}
        />
      </div>

      {/* القسم السفلي */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* آخر الطلبات */}
        <div className="bg-surface rounded-2xl p-6 shadow-sm border border-border">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-text flex items-center gap-2">
              <ShoppingCart className="text-primary" size={24} />
              آخر الطلبات
            </h2>
            <Link href="/orders" className="text-primary hover:text-primary-light text-sm font-medium">
              عرض الكل
            </Link>
          </div>

          {recentOrders.length === 0 ? (
            <p className="text-text-muted text-center py-8">لا توجد طلبات بعد</p>
          ) : (
            <div className="space-y-3">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 bg-background rounded-xl">
                  <div>
                    <p className="font-medium text-text">طلب #{order.order_number}</p>
                    <p className="text-sm text-text-muted flex items-center gap-1">
                      <Clock size={14} />
                      {formatDate(order.created_at)}
                    </p>
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-text">{formatCurrency(order.total_amount)}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${getOrderStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* تنبيه المخزون */}
        <div className="bg-surface rounded-2xl p-6 shadow-sm border border-border">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-text flex items-center gap-2">
              <AlertTriangle className="text-warning" size={24} />
              تنبيه المخزون
            </h2>
            <Link href="/products" className="text-primary hover:text-primary-light text-sm font-medium">
              عرض الكل
            </Link>
          </div>

          {lowStockList.length === 0 ? (
            <p className="text-text-muted text-center py-8">جميع المنتجات متوفرة</p>
          ) : (
            <div className="space-y-3">
              {lowStockList.map((product) => {
                const status = getStockStatus(product.quantity, product.low_stock_threshold)
                return (
                  <div key={product.id} className="flex items-center justify-between p-4 bg-background rounded-xl">
                    <div className="flex items-center gap-3">
                      {product.image_url ? (
                        <img
                          src={product.image_url || "/placeholder.svg"}
                          alt={product.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-lg bg-border flex items-center justify-center">
                          <Package size={20} className="text-text-muted" />
                        </div>
                      )}
                      <div>
                        <p className="font-medium text-text">{product.name}</p>
                        <p className="text-sm text-text-muted">كود: {product.code}</p>
                      </div>
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-text">{product.quantity}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${getStockStatusColor(status)}`}>{status}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

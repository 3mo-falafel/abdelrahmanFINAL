"use client"

import { useState } from "react"
import { StatCard } from "@/components/stat-card"
import {
  DollarSign,
  TrendingUp,
  Package,
  ShoppingCart,
  AlertTriangle,
  Award,
  Calendar,
  Save,
  History,
} from "lucide-react"
import { formatCurrency, getStockStatus, getStockStatusColor } from "@/lib/types"
import type { Product, Order, OrderItem } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { createClient } from "@/lib/supabase/client"
import { toast } from "sonner"

interface MonthlyReport {
  id: string
  month: number
  year: number
  total_sales: number
  total_cost: number
  total_profit: number
  total_orders: number
  top_products: { name: string; quantity: number; revenue: number }[]
  created_at: string
}

interface ReportsContentProps {
  products: Product[]
  orders: Order[]
  orderItems: OrderItem[]
  savedReports: MonthlyReport[]
}

const MONTHS = [
  { value: 1, label: "يناير" },
  { value: 2, label: "فبراير" },
  { value: 3, label: "مارس" },
  { value: 4, label: "أبريل" },
  { value: 5, label: "مايو" },
  { value: 6, label: "يونيو" },
  { value: 7, label: "يوليو" },
  { value: 8, label: "أغسطس" },
  { value: 9, label: "سبتمبر" },
  { value: 10, label: "أكتوبر" },
  { value: 11, label: "نوفمبر" },
  { value: 12, label: "ديسمبر" },
]

export function ReportsContent({ products, orders, orderItems, savedReports }: ReportsContentProps) {
  const now = new Date()
  const [selectedMonth, setSelectedMonth] = useState(now.getMonth() + 1)
  const [selectedYear, setSelectedYear] = useState(now.getFullYear())
  const [viewMode, setViewMode] = useState<"current" | "saved">("current")
  const [selectedSavedReport, setSelectedSavedReport] = useState<MonthlyReport | null>(null)
  const [saving, setSaving] = useState(false)

  // تصفية الطلبات حسب الشهر والسنة
  const filteredOrders = orders.filter((order) => {
    const orderDate = new Date(order.created_at)
    return orderDate.getMonth() + 1 === selectedMonth && orderDate.getFullYear() === selectedYear
  })

  // الطلبات المكتملة فقط
  const completedOrders = filteredOrders.filter((o) => o.status === "مكتمل")

  // إحصائيات الشهر المحدد
  const totalSales = completedOrders.reduce((sum, o) => sum + Number(o.total_amount), 0)
  const totalProfit = completedOrders.reduce((sum, o) => sum + Number(o.total_profit), 0)
  const totalCost = completedOrders.reduce((sum, o) => sum + Number(o.total_cost), 0)
  const totalOrders = completedOrders.length

  // المنتجات الأكثر مبيعاً للشهر
  const filteredOrderIds = filteredOrders.map((o) => o.id)
  const filteredItems = orderItems.filter((item) => filteredOrderIds.includes(item.order_id))

  const productSales: Record<string, { name: string; quantity: number; revenue: number }> = {}
  filteredItems.forEach((item) => {
    const order = orders.find((o) => o.id === item.order_id)
    if (order?.status === "ملغي") return

    if (!productSales[item.product_id]) {
      productSales[item.product_id] = { name: item.product_name, quantity: 0, revenue: 0 }
    }
    productSales[item.product_id].quantity += item.quantity
    productSales[item.product_id].revenue += Number(item.total_price)
  })

  const topProducts = Object.values(productSales)
    .sort((a, b) => b.quantity - a.quantity)
    .slice(0, 5)

  // المنتجات منخفضة المخزون
  const lowStockProducts = products
    .filter((p) => p.quantity <= p.low_stock_threshold)
    .sort((a, b) => a.quantity - b.quantity)

  // قيمة المخزون
  const stockValue = products.reduce((sum, p) => sum + p.purchase_price * p.quantity, 0)

  // حفظ التقرير الشهري
  const saveMonthlyReport = async () => {
    setSaving(true)
    const supabase = createClient()

    const reportData = {
      month: selectedMonth,
      year: selectedYear,
      total_sales: totalSales,
      total_cost: totalCost,
      total_profit: totalProfit,
      total_orders: totalOrders,
      top_products: topProducts,
      updated_at: new Date().toISOString(),
    }

    const { error } = await supabase.from("monthly_reports").upsert(reportData, { onConflict: "month,year" })

    if (error) {
      toast.error("حدث خطأ أثناء حفظ التقرير")
    } else {
      toast.success(`تم حفظ تقرير ${MONTHS[selectedMonth - 1].label} ${selectedYear}`)
    }
    setSaving(false)
  }

  // عرض تقرير محفوظ
  const showSavedReport = (report: MonthlyReport) => {
    setSelectedSavedReport(report)
    setViewMode("saved")
  }

  // العودة للعرض الحالي
  const showCurrentView = () => {
    setViewMode("current")
    setSelectedSavedReport(null)
  }

  // البيانات المعروضة
  const displayData =
    viewMode === "saved" && selectedSavedReport
      ? {
          totalSales: Number(selectedSavedReport.total_sales),
          totalProfit: Number(selectedSavedReport.total_profit),
          totalCost: Number(selectedSavedReport.total_cost),
          totalOrders: selectedSavedReport.total_orders,
          topProducts: selectedSavedReport.top_products || [],
          monthLabel: `${MONTHS[selectedSavedReport.month - 1].label} ${selectedSavedReport.year}`,
        }
      : {
          totalSales,
          totalProfit,
          totalCost,
          totalOrders,
          topProducts,
          monthLabel: `${MONTHS[selectedMonth - 1].label} ${selectedYear}`,
        }

  // السنوات المتاحة
  const years = Array.from({ length: 5 }, (_, i) => now.getFullYear() - i)

  return (
    <main className="flex-1 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* العنوان */}
        <div className="mb-8 pt-16 lg:pt-0">
          <h1 className="text-3xl font-bold text-text">التقارير</h1>
          <p className="text-text-muted mt-2">نظرة تفصيلية على أداء متجرك</p>
        </div>

        {/* اختيار الشهر والسنة */}
        <div className="bg-surface rounded-2xl p-6 shadow-sm border border-border mb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Calendar className="text-primary" size={24} />
              <h2 className="text-xl font-bold text-text">اختر الفترة</h2>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <label className="text-text-muted">الشهر:</label>
                <Select
                  value={selectedMonth.toString()}
                  onValueChange={(v) => {
                    setSelectedMonth(Number(v))
                    showCurrentView()
                  }}
                >
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {MONTHS.map((month) => (
                      <SelectItem key={month.value} value={month.value.toString()}>
                        {month.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2">
                <label className="text-text-muted">السنة:</label>
                <Select
                  value={selectedYear.toString()}
                  onValueChange={(v) => {
                    setSelectedYear(Number(v))
                    showCurrentView()
                  }}
                >
                  <SelectTrigger className="w-28">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={saveMonthlyReport} disabled={saving} className="gap-2">
                <Save size={18} />
                {saving ? "جاري الحفظ..." : "حفظ التقرير"}
              </Button>
            </div>
          </div>
        </div>

        {/* التقارير المحفوظة */}
        {savedReports.length > 0 && (
          <div className="bg-surface rounded-2xl p-6 shadow-sm border border-border mb-8">
            <div className="flex items-center gap-3 mb-4">
              <History className="text-primary" size={24} />
              <h2 className="text-xl font-bold text-text">التقارير المحفوظة</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {savedReports.map((report) => (
                <Button
                  key={report.id}
                  variant={viewMode === "saved" && selectedSavedReport?.id === report.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => showSavedReport(report)}
                  className="gap-2"
                >
                  {MONTHS[report.month - 1].label} {report.year}
                </Button>
              ))}
              {viewMode === "saved" && (
                <Button variant="ghost" size="sm" onClick={showCurrentView}>
                  العودة للعرض الحالي
                </Button>
              )}
            </div>
          </div>
        )}

        {/* عنوان الفترة المعروضة */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-primary">
            {viewMode === "saved" ? `تقرير ${displayData.monthLabel} (محفوظ)` : `تقرير ${displayData.monthLabel}`}
          </h3>
        </div>

        {/* البطاقات الإحصائية */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <StatCard
            title="إجمالي المبيعات"
            value={displayData.totalSales}
            icon={DollarSign}
            isCurrency
            color="primary"
          />
          <StatCard
            title="إجمالي الأرباح"
            value={displayData.totalProfit}
            icon={TrendingUp}
            isCurrency
            color="success"
          />
          <StatCard title="إجمالي التكلفة" value={displayData.totalCost} icon={Package} isCurrency color="warning" />
          <StatCard title="عدد الطلبات المكتملة" value={displayData.totalOrders} icon={ShoppingCart} color="primary" />
          <StatCard title="قيمة المخزون" value={stockValue} icon={Package} isCurrency color="primary" />
          <StatCard
            title="منتجات تحتاج تعبئة"
            value={lowStockProducts.length}
            icon={AlertTriangle}
            color={lowStockProducts.length > 0 ? "danger" : "success"}
          />
        </div>

        {/* تقارير تفصيلية */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* المنتجات الأكثر مبيعاً */}
          <div className="bg-surface rounded-2xl p-6 shadow-sm border border-border">
            <h2 className="text-xl font-bold text-text flex items-center gap-2 mb-6">
              <Award className="text-warning" size={24} />
              المنتجات الأكثر مبيعاً
            </h2>

            {displayData.topProducts.length === 0 ? (
              <p className="text-text-muted text-center py-8">لا توجد مبيعات في هذه الفترة</p>
            ) : (
              <div className="space-y-3">
                {displayData.topProducts.map((product, index) => (
                  <div key={product.name} className="flex items-center justify-between p-4 bg-background rounded-xl">
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                          index === 0 ? "bg-warning" : index === 1 ? "bg-text-muted" : "bg-amber-600"
                        }`}
                      >
                        {index + 1}
                      </span>
                      <span className="font-medium text-text">{product.name}</span>
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-text">{product.quantity} قطعة</p>
                      <p className="text-sm text-text-muted">{formatCurrency(product.revenue)}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* تنبيه المخزون */}
          <div className="bg-surface rounded-2xl p-6 shadow-sm border border-border">
            <h2 className="text-xl font-bold text-text flex items-center gap-2 mb-6">
              <AlertTriangle className="text-danger" size={24} />
              منتجات تحتاج إعادة تعبئة
            </h2>

            {lowStockProducts.length === 0 ? (
              <p className="text-text-muted text-center py-8">جميع المنتجات متوفرة بكميات كافية</p>
            ) : (
              <div className="space-y-3">
                {lowStockProducts.map((product) => {
                  const status = getStockStatus(product.quantity, product.low_stock_threshold)
                  return (
                    <div key={product.id} className="flex items-center justify-between p-4 bg-background rounded-xl">
                      <div className="flex items-center gap-3">
                        {product.image_url ? (
                          <img
                            src={product.image_url || "/placeholder.svg"}
                            alt={product.name}
                            className="w-10 h-10 rounded-lg object-cover"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-lg bg-border flex items-center justify-center">
                            <Package size={16} className="text-text-muted" />
                          </div>
                        )}
                        <div>
                          <p className="font-medium text-text">{product.name}</p>
                          <p className="text-sm text-text-muted">كود: {product.code}</p>
                        </div>
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-text">{product.quantity} قطعة</p>
                        <span className={`text-xs px-2 py-1 rounded-full ${getStockStatusColor(status)}`}>
                          {status}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          {/* ملخص الأداء المالي */}
          <div className="bg-surface rounded-2xl p-6 shadow-sm border border-border lg:col-span-2">
            <h2 className="text-xl font-bold text-text flex items-center gap-2 mb-6">
              <TrendingUp className="text-success" size={24} />
              ملخص الأداء المالي - {displayData.monthLabel}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-background rounded-xl p-4 text-center">
                <p className="text-text-muted mb-2">إجمالي المبيعات</p>
                <p className="text-2xl font-bold text-primary">{formatCurrency(displayData.totalSales)}</p>
              </div>
              <div className="bg-background rounded-xl p-4 text-center">
                <p className="text-text-muted mb-2">إجمالي التكلفة</p>
                <p className="text-2xl font-bold text-warning">{formatCurrency(displayData.totalCost)}</p>
              </div>
              <div className="bg-background rounded-xl p-4 text-center">
                <p className="text-text-muted mb-2">صافي الربح</p>
                <p className="text-2xl font-bold text-success">{formatCurrency(displayData.totalProfit)}</p>
              </div>
              <div className="bg-background rounded-xl p-4 text-center">
                <p className="text-text-muted mb-2">هامش الربح</p>
                <p className="text-2xl font-bold text-success">
                  {displayData.totalSales > 0
                    ? ((displayData.totalProfit / displayData.totalSales) * 100).toFixed(1)
                    : 0}
                  %
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

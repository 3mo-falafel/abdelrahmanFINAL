export interface Product {
  id: string
  name: string
  code: string
  image_url: string | null
  purchase_price: number
  selling_price: number
  quantity: number
  low_stock_threshold: number
  created_at: string
  updated_at: string
}

export interface Order {
  id: string
  order_number: number
  total_amount: number
  total_cost: number
  total_profit: number
  status: "جديد" | "مكتمل" | "ملغي"
  created_at: string
  updated_at: string
  items?: OrderItem[]
}

export interface OrderItem {
  id: string
  order_id: string
  product_id: string
  product_name: string
  quantity: number
  unit_price: number
  unit_cost: number
  total_price: number
  total_cost: number
  profit: number
  created_at: string
}

export interface DashboardStats {
  totalSales: number
  totalProfit: number
  totalProducts: number
  lowStockProducts: number
  totalCost: number
}

export type StockStatus = "متوفر" | "منخفض" | "نفد"

export function getStockStatus(quantity: number, threshold: number): StockStatus {
  if (quantity === 0) return "نفد"
  if (quantity <= threshold) return "منخفض"
  return "متوفر"
}

export function getStockStatusColor(status: StockStatus): string {
  switch (status) {
    case "متوفر":
      return "bg-green-100 text-green-800"
    case "منخفض":
      return "bg-yellow-100 text-yellow-800"
    case "نفد":
      return "bg-red-100 text-red-800"
  }
}

export function getOrderStatusColor(status: Order["status"]): string {
  switch (status) {
    case "جديد":
      return "bg-blue-100 text-blue-800"
    case "مكتمل":
      return "bg-green-100 text-green-800"
    case "ملغي":
      return "bg-red-100 text-red-800"
  }
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IL", {
    style: "currency",
    currency: "ILS",
    minimumFractionDigits: 2,
  }).format(amount)
}

export function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat("ar-EG-u-nu-latn", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateString))
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat("en-US").format(num)
}

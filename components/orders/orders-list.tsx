"use client"

import { useState } from "react"
import { ShoppingCart, Eye, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { OrderDetailsDialog } from "./order-details-dialog"
import type { Order } from "@/lib/types"
import { formatCurrency, formatDate, getOrderStatusColor } from "@/lib/types"
import { createClient } from "@/lib/supabase/client"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

interface OrdersListProps {
  orders: Order[]
}

export function OrdersList({ orders }: OrdersListProps) {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [loadingId, setLoadingId] = useState<string | null>(null)
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const router = useRouter()

  const filteredOrders = statusFilter === "all" ? orders : orders.filter((o) => o.status === statusFilter)

  const handleStatusChange = async (orderId: string, newStatus: Order["status"]) => {
    setLoadingId(orderId)
    const supabase = createClient()

    const { error } = await supabase
      .from("orders")
      .update({ status: newStatus, updated_at: new Date().toISOString() })
      .eq("id", orderId)

    if (error) {
      toast.error("حدث خطأ في تحديث حالة الطلب")
    } else {
      toast.success("تم تحديث حالة الطلب")
      router.refresh()
    }
    setLoadingId(null)
  }

  return (
    <div className="bg-surface rounded-2xl shadow-sm border border-border">
      {/* فلتر الحالة */}
      <div className="p-4 border-b border-border">
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-48 rounded-xl">
            <SelectValue placeholder="جميع الحالات" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">جميع الحالات</SelectItem>
            <SelectItem value="جديد">جديد</SelectItem>
            <SelectItem value="مكتمل">مكتمل</SelectItem>
            <SelectItem value="ملغي">ملغي</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* قائمة الطلبات */}
      {filteredOrders.length === 0 ? (
        <div className="p-12 text-center">
          <ShoppingCart className="mx-auto text-text-muted mb-4" size={48} />
          <p className="text-text-muted text-lg">لا توجد طلبات بعد</p>
        </div>
      ) : (
        <div className="divide-y divide-border">
          {filteredOrders.map((order) => {
            const isLoading = loadingId === order.id

            return (
              <div key={order.id} className="p-4 hover:bg-muted/50 transition-colors">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* معلومات الطلب */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-text">طلب #{order.order_number}</h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getOrderStatusColor(order.status)}`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <p className="text-text-muted flex items-center gap-1">
                      <Clock size={16} />
                      {formatDate(order.created_at)}
                    </p>
                  </div>

                  {/* الأرقام */}
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <p className="text-sm text-text-muted">المبلغ</p>
                      <p className="text-lg font-bold text-text">{formatCurrency(order.total_amount)}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-text-muted">التكلفة</p>
                      <p className="text-lg font-bold text-text-muted">{formatCurrency(order.total_cost)}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-text-muted">الربح</p>
                      <p className="text-lg font-bold text-success">{formatCurrency(order.total_profit)}</p>
                    </div>
                  </div>

                  {/* الإجراءات */}
                  <div className="flex items-center gap-2">
                    <Select
                      value={order.status}
                      onValueChange={(value) => handleStatusChange(order.id, value as Order["status"])}
                      disabled={isLoading}
                    >
                      <SelectTrigger className="w-32 rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="جديد">جديد</SelectItem>
                        <SelectItem value="مكتمل">مكتمل</SelectItem>
                        <SelectItem value="ملغي">ملغي</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button
                      variant="outline"
                      className="rounded-xl gap-2 bg-transparent"
                      onClick={() => setSelectedOrder(order)}
                    >
                      <Eye size={18} />
                      التفاصيل
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* حوار التفاصيل */}
      {selectedOrder && (
        <OrderDetailsDialog order={selectedOrder} open={!!selectedOrder} onOpenChange={() => setSelectedOrder(null)} />
      )}
    </div>
  )
}

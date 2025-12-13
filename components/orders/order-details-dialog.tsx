"use client"

import { useState, useEffect } from "react"
import { Package } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { createClient } from "@/lib/supabase/client"
import type { Order, OrderItem } from "@/lib/types"
import { formatCurrency, formatDate, getOrderStatusColor } from "@/lib/types"

interface OrderDetailsDialogProps {
  order: Order
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function OrderDetailsDialog({ order, open, onOpenChange }: OrderDetailsDialogProps) {
  const [items, setItems] = useState<OrderItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (open) {
      fetchItems()
    }
  }, [open, order.id])

  const fetchItems = async () => {
    setLoading(true)
    const supabase = createClient()
    const { data } = await supabase.from("order_items").select("*").eq("order_id", order.id)
    setItems((data || []) as OrderItem[])
    setLoading(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-3">
            تفاصيل طلب #{order.order_number}
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getOrderStatusColor(order.status)}`}>
              {order.status}
            </span>
          </DialogTitle>
        </DialogHeader>

        <div className="mt-4">
          {/* معلومات الطلب */}
          <div className="bg-muted rounded-xl p-4 mb-4">
            <p className="text-text-muted mb-2">تاريخ الطلب: {formatDate(order.created_at)}</p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-sm text-text-muted">المبلغ</p>
                <p className="text-xl font-bold text-text">{formatCurrency(order.total_amount)}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-text-muted">التكلفة</p>
                <p className="text-xl font-bold text-text-muted">{formatCurrency(order.total_cost)}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-text-muted">الربح</p>
                <p className="text-xl font-bold text-success">{formatCurrency(order.total_profit)}</p>
              </div>
            </div>
          </div>

          {/* عناصر الطلب */}
          <h3 className="font-bold text-lg text-text mb-3">عناصر الطلب</h3>
          {loading ? (
            <p className="text-center text-text-muted py-4">جاري التحميل...</p>
          ) : items.length === 0 ? (
            <p className="text-center text-text-muted py-4">لا توجد عناصر</p>
          ) : (
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 bg-muted rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-border flex items-center justify-center">
                      <Package size={16} className="text-text-muted" />
                    </div>
                    <div>
                      <p className="font-medium text-text">{item.product_name}</p>
                      <p className="text-sm text-text-muted">
                        {item.quantity} × {formatCurrency(item.unit_price)}
                      </p>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-text">{formatCurrency(item.total_price)}</p>
                    <p className="text-sm text-success">ربح: {formatCurrency(item.profit)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

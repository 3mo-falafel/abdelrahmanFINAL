import { createClient } from "@/lib/supabase/server"
import { Sidebar } from "@/components/sidebar"
import { OrdersList } from "@/components/orders/orders-list"
import { CreateOrderDialog } from "@/components/orders/create-order-dialog"
import type { Product, Order } from "@/lib/types"

export default async function OrdersPage() {
  const supabase = await createClient()

  const { data: orders } = await supabase.from("orders").select("*").order("created_at", { ascending: false })

  const { data: products } = await supabase.from("products").select("*").order("name", { ascending: true })

  const orderList = (orders || []) as Order[]
  const productList = (products || []) as Product[]

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />

      <main className="flex-1 p-4 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {/* العنوان */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pt-16 lg:pt-0">
            <div>
              <h1 className="text-3xl font-bold text-text">الطلبات</h1>
              <p className="text-text-muted mt-2">إدارة طلبات العملاء</p>
            </div>
            <CreateOrderDialog products={productList} />
          </div>

          {/* قائمة الطلبات */}
          <OrdersList orders={orderList} />
        </div>
      </main>
    </div>
  )
}

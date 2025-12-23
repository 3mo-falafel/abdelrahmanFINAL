import { createClient } from "@/lib/supabase/server"
import { Sidebar } from "@/components/sidebar"
import { OrdersList } from "@/components/orders/orders-list"
import type { Order } from "@/lib/types"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

// Disable caching for this page to always fetch fresh data
export const dynamic = "force-dynamic"
export const revalidate = 0

export default async function OrdersPage() {
  const supabase = await createClient()

  const { data: orders } = await supabase.from("orders").select("*").order("created_at", { ascending: false })

  const orderList = (orders || []) as Order[]

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
            <Link href="/orders/new">
              <Button className="bg-primary hover:bg-primary-light text-white rounded-xl px-6 py-6 text-lg gap-2">
                <Plus size={24} />
                طلب جديد
              </Button>
            </Link>
          </div>

          {/* قائمة الطلبات */}
          <OrdersList orders={orderList} />
        </div>
      </main>
    </div>
  )
}

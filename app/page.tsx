import { createClient } from "@/lib/supabase/server"
import { Sidebar } from "@/components/sidebar"
import { DashboardContent } from "@/components/dashboard/dashboard-content"
import type { Product, Order } from "@/lib/types"

export default async function DashboardPage() {
  const supabase = await createClient()

  // جلب البيانات
  const { data: products } = await supabase.from("products").select("*")
  const { data: orders } = await supabase.from("orders").select("*").order("created_at", { ascending: false })

  const productList = (products || []) as Product[]
  const orderList = (orders || []) as Order[]

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />

      <main className="flex-1 p-4 lg:p-8 lg:mr-0">
        <div className="max-w-7xl mx-auto">
          <DashboardContent products={productList} orders={orderList} />
        </div>
      </main>
    </div>
  )
}

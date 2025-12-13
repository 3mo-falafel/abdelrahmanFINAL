import { createClient } from "@/lib/supabase/server"
import { Sidebar } from "@/components/sidebar"
import { ReportsContent } from "@/components/reports/reports-content"
import type { Product, Order, OrderItem } from "@/lib/types"

export default async function ReportsPage() {
  const supabase = await createClient()

  // جلب جميع البيانات
  const { data: products } = await supabase.from("products").select("*")
  const { data: orders } = await supabase.from("orders").select("*")
  const { data: orderItems } = await supabase.from("order_items").select("*")
  const { data: monthlyReports } = await supabase
    .from("monthly_reports")
    .select("*")
    .order("year", { ascending: false })
    .order("month", { ascending: false })

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      <ReportsContent
        products={(products || []) as Product[]}
        orders={(orders || []) as Order[]}
        orderItems={(orderItems || []) as OrderItem[]}
        savedReports={monthlyReports || []}
      />
    </div>
  )
}

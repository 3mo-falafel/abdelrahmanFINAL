"use client"

import { useEffect, useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { DashboardContent } from "@/components/dashboard/dashboard-content"
import type { Product, Order } from "@/lib/types"
import { createClient } from "@/lib/supabase/client"

export default function DashboardPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const supabase = createClient()
        
        // Fetch products and orders in parallel
        const [productsResult, ordersResult] = await Promise.all([
          supabase.from("products").select("*"),
          supabase.from("orders").select("*").order("created_at", { ascending: false })
        ])

        setProducts((productsResult.data || []) as Product[])
        setOrders((ordersResult.data || []) as Order[])
      } catch (error) {
        console.error('Error fetching data:', error)
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex">
        <Sidebar />
        <main className="flex-1 p-4 lg:p-8 lg:mr-0">
          <div className="max-w-7xl mx-auto">
            <div className="text-center p-12 text-text-muted">جاري التحميل...</div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />

      <main className="flex-1 p-4 lg:p-8 lg:mr-0">
        <div className="max-w-7xl mx-auto">
          <DashboardContent products={products} orders={orders} />
        </div>
      </main>
    </div>
  )
}

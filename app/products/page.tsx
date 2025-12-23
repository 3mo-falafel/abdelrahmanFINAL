"use client"

import { useEffect, useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { ProductsTable } from "@/components/products/products-table"
import { AddProductDialog } from "@/components/products/add-product-dialog"
import type { Product } from "@/lib/types"
import { createClient } from "@/lib/supabase/client"
import { RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchProducts = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const supabase = createClient()
      const { data, error: fetchError } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false })
      
      if (fetchError) {
        throw new Error(fetchError.message)
      }
      
      setProducts((data || []) as Product[])
    } catch (err: any) {
      console.error("Error fetching products:", err)
      setError(`خطأ في جلب المنتجات: ${err.message}`)
    }
    
    setLoading(false)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />

      <main className="flex-1 p-4 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {/* العنوان */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pt-16 lg:pt-0">
            <div>
              <h1 className="text-3xl font-bold text-text">المنتجات</h1>
              <p className="text-text-muted mt-2">إدارة جميع منتجاتك في مكان واحد</p>
            </div>
            <AddProductDialog onProductAdded={fetchProducts} />
          </div>

          {/* جدول المنتجات */}
          {loading ? (
            <div className="bg-surface rounded-2xl shadow-sm border border-border p-12 text-center">
              <p className="text-text-muted text-lg">جاري التحميل...</p>
            </div>
          ) : error ? (
            <div className="bg-surface rounded-2xl shadow-sm border border-border p-12 text-center">
              <p className="text-danger text-lg mb-4">{error}</p>
              <Button onClick={fetchProducts} className="gap-2">
                <RefreshCw size={18} />
                إعادة المحاولة
              </Button>
            </div>
          ) : (
            <ProductsTable products={products} onProductsChange={fetchProducts} />
          )}
        </div>
      </main>
    </div>
  )
}

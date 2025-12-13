import { createClient } from "@/lib/supabase/server"
import { Sidebar } from "@/components/sidebar"
import { ProductsTable } from "@/components/products/products-table"
import { AddProductDialog } from "@/components/products/add-product-dialog"
import type { Product } from "@/lib/types"

export default async function ProductsPage() {
  const supabase = await createClient()

  const { data: products } = await supabase.from("products").select("*").order("created_at", { ascending: false })

  const productList = (products || []) as Product[]

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
            <AddProductDialog />
          </div>

          {/* جدول المنتجات */}
          <ProductsTable products={productList} />
        </div>
      </main>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Search, Package, Plus, Minus, Pencil, Trash2, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { EditProductDialog } from "./edit-product-dialog"
import type { Product } from "@/lib/types"
import { formatCurrency, getStockStatus, getStockStatusColor } from "@/lib/types"
import { createClient } from "@/lib/supabase/client"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

interface ProductsTableProps {
  products: Product[]
}

export function ProductsTable({ products }: ProductsTableProps) {
  const [search, setSearch] = useState("")
  const [deleteProduct, setDeleteProduct] = useState<Product | null>(null)
  const [editProduct, setEditProduct] = useState<Product | null>(null)
  const [loadingId, setLoadingId] = useState<string | null>(null)
  const router = useRouter()

  const filteredProducts = products.filter((p) => {
    const searchLower = search.toLowerCase().trim()
    if (!searchLower) return true
    return (
      p.name.toLowerCase().includes(searchLower) ||
      p.code.toLowerCase().includes(searchLower) ||
      p.id.toLowerCase().includes(searchLower)
    )
  })

  const handleQuantityChange = async (product: Product, change: number) => {
    const newQuantity = product.quantity + change
    if (newQuantity < 0) return

    setLoadingId(product.id)
    const supabase = createClient()

    const { error } = await supabase
      .from("products")
      .update({ quantity: newQuantity, updated_at: new Date().toISOString() })
      .eq("id", product.id)

    if (error) {
      toast.error("حدث خطأ في تحديث الكمية")
    } else {
      toast.success("تم تحديث الكمية")
      router.refresh()
    }
    setLoadingId(null)
  }

  const handleDelete = async () => {
    if (!deleteProduct) return

    setLoadingId(deleteProduct.id)
    const supabase = createClient()

    // Delete the product - the database will handle setting product_id to NULL in order_items
    const { error } = await supabase.from("products").delete().eq("id", deleteProduct.id)

    if (error) {
      console.error("Delete error:", error)
      toast.error(`حدث خطأ في حذف المنتج: ${error.message || 'خطأ غير معروف'}`)
    } else {
      toast.success("تم حذف المنتج بنجاح")
      router.refresh()
    }
    setDeleteProduct(null)
    setLoadingId(null)
  }

  return (
    <div className="bg-surface rounded-2xl shadow-sm border border-border">
      <div className="p-4 border-b border-border">
        <div className="relative max-w-lg">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
          <Input
            placeholder="ابحث عن منتج بالاسم أو الكود أو الرقم التعريفي..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pr-10 pl-10 text-lg py-6 rounded-xl"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text transition-colors"
            >
              <X size={20} />
            </button>
          )}
        </div>
        {search && <p className="mt-2 text-sm text-text-muted">تم العثور على {filteredProducts.length} منتج</p>}
      </div>

      {/* الجدول */}
      {filteredProducts.length === 0 ? (
        <div className="p-12 text-center">
          <Package className="mx-auto text-text-muted mb-4" size={48} />
          <p className="text-text-muted text-lg">{search ? "لا توجد منتجات مطابقة للبحث" : "لا توجد منتجات بعد"}</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted">
              <tr>
                <th className="text-right p-4 font-semibold text-text">المنتج</th>
                <th className="text-right p-4 font-semibold text-text">الكود</th>
                <th className="text-right p-4 font-semibold text-text">سعر الشراء</th>
                <th className="text-right p-4 font-semibold text-text">سعر البيع</th>
                <th className="text-right p-4 font-semibold text-text">الربح</th>
                <th className="text-center p-4 font-semibold text-text">الكمية</th>
                <th className="text-center p-4 font-semibold text-text">الحالة</th>
                <th className="text-center p-4 font-semibold text-text">إجراءات</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => {
                const profit = product.selling_price - product.purchase_price
                const status = getStockStatus(product.quantity, product.low_stock_threshold)
                const isLoading = loadingId === product.id

                return (
                  <tr key={product.id} className="border-t border-border hover:bg-muted/50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        {product.image_url ? (
                          <img
                            src={product.image_url || "/placeholder.svg"}
                            alt={product.name}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                            <Package size={20} className="text-text-muted" />
                          </div>
                        )}
                        <span className="font-medium text-text">{product.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-text-muted font-mono">{product.code}</td>
                    <td className="p-4 text-text">{formatCurrency(product.purchase_price)}</td>
                    <td className="p-4 text-text font-semibold">{formatCurrency(product.selling_price)}</td>
                    <td className="p-4 text-success font-semibold">{formatCurrency(profit)}</td>
                    <td className="p-4">
                      <div className="flex items-center justify-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-10 w-10 rounded-xl bg-transparent"
                          onClick={() => handleQuantityChange(product, -1)}
                          disabled={isLoading || product.quantity === 0}
                        >
                          <Minus size={18} />
                        </Button>
                        <span className="w-12 text-center font-bold text-lg text-text">{product.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-10 w-10 rounded-xl bg-transparent"
                          onClick={() => handleQuantityChange(product, 1)}
                          disabled={isLoading}
                        >
                          <Plus size={18} />
                        </Button>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStockStatusColor(status)}`}>
                        {status}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-center gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-10 w-10 rounded-xl text-primary hover:bg-primary/10"
                          onClick={() => setEditProduct(product)}
                        >
                          <Pencil size={18} />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-10 w-10 rounded-xl text-danger hover:bg-danger/10"
                          onClick={() => setDeleteProduct(product)}
                        >
                          <Trash2 size={18} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* حوار التأكيد للحذف */}
      <AlertDialog open={!!deleteProduct} onOpenChange={() => setDeleteProduct(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>هل أنت متأكد من حذف هذا المنتج؟</AlertDialogTitle>
            <AlertDialogDescription>
              سيتم حذف المنتج "{deleteProduct?.name}" نهائياً. هذا الإجراء لا يمكن التراجع عنه.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="gap-2">
            <AlertDialogCancel className="rounded-xl">إلغاء</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-danger hover:bg-danger/90 rounded-xl">
              حذف
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* حوار التعديل */}
      {editProduct && (
        <EditProductDialog product={editProduct} open={!!editProduct} onOpenChange={() => setEditProduct(null)} />
      )}
    </div>
  )
}

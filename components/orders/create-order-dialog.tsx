"use client"

import { useState } from "react"
import { Plus, Minus, ShoppingCart, Trash2, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { createClient } from "@/lib/supabase/client"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import type { Product } from "@/lib/types"
import { formatCurrency } from "@/lib/types"

interface CreateOrderDialogProps {
  products: Product[]
}

interface CartItem {
  product: Product
  quantity: number
}

export function CreateOrderDialog({ products }: CreateOrderDialogProps) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")
  const [cart, setCart] = useState<CartItem[]>([])
  const router = useRouter()

  const filteredProducts = products.filter(
    (p) => (p.name.includes(search) || p.code.includes(search)) && p.quantity > 0,
  )

  const addToCart = (product: Product) => {
    const existing = cart.find((item) => item.product.id === product.id)
    if (existing) {
      if (existing.quantity < product.quantity) {
        setCart(cart.map((item) => (item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)))
      } else {
        toast.error("الكمية المطلوبة أكبر من المتوفر")
      }
    } else {
      setCart([...cart, { product, quantity: 1 }])
    }
  }

  const updateQuantity = (productId: string, change: number) => {
    setCart(
      cart
        .map((item) => {
          if (item.product.id === productId) {
            const newQuantity = item.quantity + change
            if (newQuantity > item.product.quantity) {
              toast.error("الكمية المطلوبة أكبر من المتوفر")
              return item
            }
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : item
          }
          return item
        })
        .filter((item) => item.quantity > 0),
    )
  }

  const removeFromCart = (productId: string) => {
    setCart(cart.filter((item) => item.product.id !== productId))
  }

  // حساب الإجماليات
  const totals = cart.reduce(
    (acc, item) => {
      const itemTotal = item.product.selling_price * item.quantity
      const itemCost = item.product.purchase_price * item.quantity
      return {
        amount: acc.amount + itemTotal,
        cost: acc.cost + itemCost,
        profit: acc.profit + (itemTotal - itemCost),
      }
    },
    { amount: 0, cost: 0, profit: 0 },
  )

  const handleSubmit = async () => {
    if (cart.length === 0) {
      toast.error("الرجاء إضافة منتجات للطلب")
      return
    }

    setLoading(true)
    const supabase = createClient()

    // إنشاء الطلب
    const { data: orderData, error: orderError } = await supabase
      .from("orders")
      .insert({
        total_amount: totals.amount,
        total_cost: totals.cost,
        total_profit: totals.profit,
        status: "جديد",
      })
      .select()
      .single()

    if (orderError) {
      toast.error("حدث خطأ في إنشاء الطلب")
      setLoading(false)
      return
    }

    // إضافة عناصر الطلب
    const orderItems = cart.map((item) => ({
      order_id: orderData.id,
      product_id: item.product.id,
      product_name: item.product.name,
      quantity: item.quantity,
      unit_price: item.product.selling_price,
      unit_cost: item.product.purchase_price,
      total_price: item.product.selling_price * item.quantity,
      total_cost: item.product.purchase_price * item.quantity,
      profit: (item.product.selling_price - item.product.purchase_price) * item.quantity,
    }))

    const { error: itemsError } = await supabase.from("order_items").insert(orderItems)

    if (itemsError) {
      toast.error("حدث خطأ في إضافة عناصر الطلب")
      setLoading(false)
      return
    }

    // تحديث كميات المنتجات
    for (const item of cart) {
      await supabase
        .from("products")
        .update({
          quantity: item.product.quantity - item.quantity,
          updated_at: new Date().toISOString(),
        })
        .eq("id", item.product.id)
    }

    toast.success("تم إنشاء الطلب بنجاح")
    setOpen(false)
    setCart([])
    setSearch("")
    router.refresh()
    setLoading(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-primary hover:bg-primary-light text-white rounded-xl px-6 py-6 text-lg gap-2">
          <Plus size={24} />
          طلب جديد
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl">إنشاء طلب جديد</DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-hidden flex gap-4 mt-4">
          {/* قائمة المنتجات */}
          <div className="flex-1 flex flex-col overflow-hidden">
            <Input
              placeholder="ابحث عن منتج..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mb-4 rounded-xl"
            />
            <div className="flex-1 overflow-y-auto space-y-2">
              {filteredProducts.length === 0 ? (
                <p className="text-center text-text-muted py-8">لا توجد منتجات متوفرة</p>
              ) : (
                filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between p-3 bg-muted rounded-xl hover:bg-muted/70 cursor-pointer transition-colors"
                    onClick={() => addToCart(product)}
                  >
                    <div className="flex items-center gap-3">
                      {product.image_url ? (
                        <img
                          src={product.image_url || "/placeholder.svg"}
                          alt={product.name}
                          className="w-10 h-10 rounded-lg object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-lg bg-border flex items-center justify-center">
                          <Package size={16} className="text-text-muted" />
                        </div>
                      )}
                      <div>
                        <p className="font-medium text-text">{product.name}</p>
                        <p className="text-sm text-text-muted">متوفر: {product.quantity}</p>
                      </div>
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-text">{formatCurrency(product.selling_price)}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* سلة الطلب */}
          <div className="w-80 flex flex-col bg-muted rounded-xl p-4">
            <h3 className="font-bold text-lg text-text mb-4 flex items-center gap-2">
              <ShoppingCart size={20} />
              سلة الطلب ({cart.length})
            </h3>

            <div className="flex-1 overflow-y-auto space-y-2 mb-4">
              {cart.length === 0 ? (
                <p className="text-center text-text-muted py-8">السلة فارغة</p>
              ) : (
                cart.map((item) => (
                  <div key={item.product.id} className="bg-surface p-3 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium text-text text-sm">{item.product.name}</p>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-danger hover:text-danger/80"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-lg bg-transparent"
                          onClick={() => updateQuantity(item.product.id, -1)}
                        >
                          <Minus size={14} />
                        </Button>
                        <span className="w-8 text-center font-bold text-text">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-lg bg-transparent"
                          onClick={() => updateQuantity(item.product.id, 1)}
                        >
                          <Plus size={14} />
                        </Button>
                      </div>
                      <p className="font-bold text-text">
                        {formatCurrency(item.product.selling_price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* الإجماليات */}
            <div className="border-t border-border pt-4 space-y-2">
              <div className="flex justify-between text-text">
                <span>المبلغ الإجمالي:</span>
                <span className="font-bold">{formatCurrency(totals.amount)}</span>
              </div>
              <div className="flex justify-between text-text-muted">
                <span>التكلفة:</span>
                <span>{formatCurrency(totals.cost)}</span>
              </div>
              <div className="flex justify-between text-success font-bold">
                <span>الربح:</span>
                <span>{formatCurrency(totals.profit)}</span>
              </div>
            </div>

            {/* زر الإنشاء */}
            <Button
              onClick={handleSubmit}
              disabled={loading || cart.length === 0}
              className="w-full mt-4 bg-primary hover:bg-primary-light text-white rounded-xl py-6 text-lg"
            >
              {loading ? "جاري الإنشاء..." : "إنشاء الطلب"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

"use client"

import { useState } from "react"
import { Plus, Minus, ShoppingCart, Trash2, Package, Edit2, User, CreditCard, Search, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createClient } from "@/lib/supabase/client"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import type { Product } from "@/lib/types"
import { formatCurrency } from "@/lib/types"
import { useEffect } from "react"

interface CartItem {
  product: Product
  quantity: number
  customPrice?: number
}

export default function NewOrderPage() {
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")
  const [cart, setCart] = useState<CartItem[]>([])
  const [customerName, setCustomerName] = useState("")
  const [orderDiscount, setOrderDiscount] = useState("")
  const [debtAmount, setDebtAmount] = useState("")
  const [editingPrice, setEditingPrice] = useState<string | null>(null)
  const [products, setProducts] = useState<Product[]>([])
  const router = useRouter()

  useEffect(() => {
    const fetchProducts = async () => {
      const supabase = createClient()
      const { data } = await supabase.from("products").select("*").order("name", { ascending: true })
      setProducts((data || []) as Product[])
    }
    fetchProducts()
  }, [])

  const filteredProducts = products.filter(
    (p) => (p.name.includes(search) || p.code.includes(search)) && p.quantity > 0,
  )

  const addToCart = (product: Product) => {
    const existing = cart.find((item) => item.product.id === product.id)
    if (existing) {
      if (existing.quantity < product.quantity) {
        setCart(cart.map((item) => (item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)))
      } else {
        toast.error("لا يمكن إضافة المزيد من هذا المنتج")
      }
    } else {
      setCart([...cart, { product, quantity: 1 }])
    }
  }

  const removeFromCart = (productId: string) => {
    setCart(cart.filter((item) => item.product.id !== productId))
  }

  const updateQuantity = (productId: string, delta: number) => {
    setCart(
      cart
        .map((item) => {
          if (item.product.id === productId) {
            const newQuantity = item.quantity + delta
            if (newQuantity <= 0) return null
            if (newQuantity > item.product.quantity) {
              toast.error("الكمية المطلوبة أكبر من المتوفر")
              return item
            }
            return { ...item, quantity: newQuantity }
          }
          return item
        })
        .filter((item): item is CartItem => item !== null),
    )
  }

  const updateCustomPrice = (productId: string, newPrice: number) => {
    if (newPrice <= 0) {
      toast.error("السعر يجب أن يكون أكبر من صفر")
      setEditingPrice(null)
      return
    }

    setCart(
      cart.map((item) => (item.product.id === productId ? { ...item, customPrice: newPrice } : item)),
    )
    setEditingPrice(null)
    toast.success("تم تحديث السعر")
  }

  // حساب إجماليات السلة
  const cartTotals = cart.reduce(
    (acc, item) => {
      const actualPrice = item.customPrice ?? item.product.selling_price
      const discountAmount = item.customPrice ? (item.product.selling_price - item.customPrice) * item.quantity : 0

      return {
        amount: acc.amount + actualPrice * item.quantity,
        cost: acc.cost + item.product.purchase_price * item.quantity,
        profit: acc.profit + (actualPrice - item.product.purchase_price) * item.quantity,
        totalDiscount: acc.totalDiscount + discountAmount,
      }
    },
    { amount: 0, cost: 0, profit: 0, totalDiscount: 0 },
  )

  // حساب الخصم والدين
  const orderDiscountAmount = Number.parseFloat(orderDiscount) || 0
  const actualDebt = Number.parseFloat(debtAmount) || 0
  
  // المبلغ النهائي = إجمالي السلة - خصم الطلب
  const totals = {
    ...cartTotals,
    amount: cartTotals.amount - orderDiscountAmount,
    profit: cartTotals.profit - orderDiscountAmount,
    totalDiscount: cartTotals.totalDiscount + orderDiscountAmount,
  }

  const handleSubmit = async () => {
    if (cart.length === 0) {
      toast.error("السلة فارغة")
      return
    }

    // التحقق من صحة الخصم
    if (orderDiscountAmount < 0) {
      toast.error("مبلغ الخصم لا يمكن أن يكون سالباً")
      return
    }

    if (orderDiscountAmount > cartTotals.amount) {
      toast.error("مبلغ الخصم لا يمكن أن يكون أكبر من إجمالي السلة")
      return
    }

    // التحقق من مبلغ الدين
    if (actualDebt > 0 && !customerName.trim()) {
      toast.error("الرجاء إدخال اسم العميل عند وجود دين")
      return
    }

    if (actualDebt > totals.amount) {
      toast.error("مبلغ الدين لا يمكن أن يكون أكبر من المبلغ الإجمالي بعد الخصم")
      return
    }

    // حساب المبلغ المدفوع بناءً على الدين
    const actualPaidAmount = totals.amount - actualDebt

    // تحديد حالة الدفع تلقائياً
    let finalPaymentStatus: "مدفوع" | "دين" | "دفع جزئي" = "مدفوع"
    if (actualDebt > 0) {
      if (actualPaidAmount <= 0) {
        finalPaymentStatus = "دين"
      } else {
        finalPaymentStatus = "دفع جزئي"
      }
    }

    setLoading(true)
    const supabase = createClient()

    const { data: order, error: orderError } = await supabase
      .from("orders")
      .insert({
        total_amount: totals.amount,
        total_cost: totals.cost,
        total_profit: totals.profit,
        status: "مكتمل",
        customer_name: customerName.trim() || null,
        payment_status: finalPaymentStatus,
        paid_amount: actualPaidAmount,
      })
      .select()
      .single()

    if (orderError || !order) {
      toast.error("حدث خطأ في إنشاء الطلب")
      setLoading(false)
      return
    }

    // إضافة عناصر الطلب
    for (const item of cart) {
      const actualPrice = item.customPrice ?? item.product.selling_price
      const discountAmount = item.customPrice ? item.product.selling_price - item.customPrice : 0

      await supabase.from("order_items").insert({
        order_id: order.id,
        product_id: item.product.id,
        product_name: item.product.name,
        quantity: item.quantity,
        unit_price: item.product.selling_price,
        unit_cost: item.product.purchase_price,
        total_price: actualPrice * item.quantity,
        total_cost: item.product.purchase_price * item.quantity,
        profit: (actualPrice - item.product.purchase_price) * item.quantity,
        custom_price: item.customPrice || null,
        discount_amount: discountAmount * item.quantity,
      })

      const newQuantity = item.product.quantity - item.quantity
      await supabase.from("products").update({ quantity: newQuantity }).eq("id", item.product.id)
    }

    // إضافة سجل الدفع الأولي إذا كان هناك دفع
    if (actualPaidAmount > 0) {
      await supabase.from("payment_history").insert({
        order_id: order.id,
        payment_amount: actualPaidAmount,
        notes: "دفعة أولية عند إنشاء الطلب",
      })
    }

    toast.success("تم إنشاء الطلب بنجاح")
    router.push("/orders")
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => router.push("/orders")}
              className="gap-2"
            >
              <ArrowRight size={20} />
              رجوع
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-text">إنشاء طلب جديد</h1>
              <p className="text-text-muted mt-1">اختر المنتجات وأضفها للسلة</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-6 h-[calc(100vh-150px)]">
          {/* Cart Section - Left */}
          <div className="w-[700px] flex flex-col bg-gradient-to-b from-muted to-background rounded-2xl p-6 border-2 border-border shadow-lg">
            <h3 className="font-bold text-2xl text-text mb-6 flex items-center gap-3 pb-4 border-b-2 border-border">
              <ShoppingCart size={28} className="text-primary" />
              سلة الطلب ({cart.length})
            </h3>

            {/* Customer & Payment Info */}
            <div className="space-y-4 mb-6 p-4 bg-background rounded-xl border border-border">
              <div>
                <Label htmlFor="customerName" className="text-sm text-text-muted mb-2 flex items-center gap-2">
                  <User size={16} />
                  اسم العميل {actualDebt > 0 && <span className="text-danger">*</span>}
                </Label>
                <Input
                  id="customerName"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="اسم العميل (مطلوب عند وجود دين)"
                  className="rounded-lg h-12"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="orderDiscount" className="text-sm text-text-muted mb-2 flex items-center gap-2">
                    <CreditCard size={16} />
                    خصم على الطلب
                  </Label>
                  <Input
                    id="orderDiscount"
                    type="number"
                    step="0.01"
                    min="0"
                    value={orderDiscount}
                    onChange={(e) => setOrderDiscount(e.target.value)}
                    placeholder="0.00"
                    className="rounded-lg h-12"
                  />
                </div>
                <div>
                  <Label htmlFor="debtAmount" className="text-sm text-text-muted mb-2 flex items-center gap-2">
                    <CreditCard size={16} />
                    مبلغ الدين
                  </Label>
                  <Input
                    id="debtAmount"
                    type="number"
                    step="0.01"
                    min="0"
                    value={debtAmount}
                    onChange={(e) => setDebtAmount(e.target.value)}
                    placeholder="0.00"
                    className="rounded-lg h-12"
                  />
                </div>
              </div>

              {(orderDiscountAmount > 0 || actualDebt > 0) && (
                <div className="text-sm space-y-1 p-3 bg-muted rounded-lg">
                  {orderDiscountAmount > 0 && (
                    <p className="text-success">الخصم: {formatCurrency(orderDiscountAmount)}</p>
                  )}
                  {actualDebt > 0 && (
                    <p className="text-warning">الدين: {formatCurrency(actualDebt)} | سيدفع العميل: {formatCurrency(totals.amount - actualDebt)}</p>
                  )}
                </div>
              )}
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto space-y-3 mb-6 min-h-[200px]">
              {cart.length === 0 ? (
                <div className="text-center text-text-muted py-16">
                  <ShoppingCart size={64} className="mx-auto mb-4 opacity-30" />
                  <p className="text-xl">السلة فارغة</p>
                  <p className="text-sm mt-2">انقر على منتج لإضافته</p>
                </div>
              ) : (
                cart.map((item) => {
                  const actualPrice = item.customPrice ?? item.product.selling_price
                  const hasDiscount = item.customPrice && item.customPrice < item.product.selling_price
                  return (
                    <div key={item.product.id} className="bg-surface p-4 rounded-xl border border-border">
                      <div className="flex items-center justify-between mb-3">
                        <p className="font-bold text-text">{item.product.name}</p>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-danger hover:text-danger/80 p-2"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="mb-3">
                        {editingPrice === item.product.id ? (
                          <div className="flex gap-2">
                            <Input
                              type="number"
                              step="0.01"
                              defaultValue={actualPrice}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  updateCustomPrice(item.product.id, Number.parseFloat(e.currentTarget.value))
                                }
                              }}
                              onBlur={(e) => {
                                const newPrice = Number.parseFloat(e.target.value)
                                if (newPrice > 0) {
                                  updateCustomPrice(item.product.id, newPrice)
                                } else {
                                  setEditingPrice(null)
                                }
                              }}
                              className="h-9 rounded"
                              autoFocus
                            />
                          </div>
                        ) : (
                          <div className="flex items-center gap-3">
                            <div className="flex-1">
                              {hasDiscount && (
                                <p className="text-sm text-text-muted line-through">
                                  {formatCurrency(item.product.selling_price)}
                                </p>
                              )}
                              <p className={`text-lg font-bold ${hasDiscount ? "text-success" : "text-text"}`}>
                                {formatCurrency(actualPrice)}
                              </p>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => setEditingPrice(item.product.id)}
                            >
                              <Edit2 size={16} />
                            </Button>
                          </div>
                        )}
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-10 w-10 rounded-lg"
                            onClick={() => updateQuantity(item.product.id, -1)}
                          >
                            <Minus size={16} />
                          </Button>
                          <span className="w-12 text-center font-bold text-text text-lg">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-10 w-10 rounded-lg"
                            onClick={() => updateQuantity(item.product.id, 1)}
                          >
                            <Plus size={16} />
                          </Button>
                        </div>
                        <p className="font-bold text-text text-lg">{formatCurrency(actualPrice * item.quantity)}</p>
                      </div>
                    </div>
                  )
                })
              )}
            </div>

            {/* Totals */}
            <div className="border-t-2 border-border pt-4 space-y-3">
              {totals.totalDiscount > 0 && (
                <div className="flex justify-between text-warning">
                  <span>الخصم:</span>
                  <span className="font-bold">-{formatCurrency(totals.totalDiscount)}</span>
                </div>
              )}
              <div className="flex justify-between text-text text-lg">
                <span>المبلغ الإجمالي:</span>
                <span className="font-bold">{formatCurrency(totals.amount)}</span>
              </div>
              <div className="flex justify-between text-text-muted">
                <span>التكلفة:</span>
                <span>{formatCurrency(totals.cost)}</span>
              </div>
              <div className="flex justify-between text-success font-bold text-lg">
                <span>الربح:</span>
                <span>{formatCurrency(totals.profit)}</span>
              </div>
              {totals.profit > 0 && (
                <div className="flex justify-between text-sm text-text-muted">
                  <span>هامش الربح:</span>
                  <span>{((totals.profit / totals.amount) * 100).toFixed(1)}%</span>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <Button
              onClick={handleSubmit}
              disabled={loading || cart.length === 0}
              className="w-full mt-6 bg-primary hover:bg-primary-light text-white rounded-xl py-7 text-xl"
            >
              {loading ? "جاري الإنشاء..." : "إنشاء الطلب"}
            </Button>
          </div>

          {/* Products Section - Right */}
          <div className="flex-1 flex flex-col bg-background rounded-2xl border-2 border-border p-6">
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted" size={24} />
                <Input
                  placeholder="ابحث عن منتج بالاسم أو الكود..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="rounded-xl pr-14 pl-4 h-16 text-xl border-2 focus:border-primary font-medium"
                />
                {search && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSearch("")}
                    className="absolute left-3 top-1/2 -translate-y-1/2"
                  >
                    <X size={20} />
                  </Button>
                )}
              </div>
              <div className="flex items-center justify-between mt-4">
                <p className="text-2xl font-bold text-text">
                  {filteredProducts.length} منتج متاح
                </p>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="flex-1 overflow-y-auto">
              {filteredProducts.length === 0 ? (
                <div className="text-center text-text-muted py-20">
                  <Package size={100} className="mx-auto mb-6 opacity-20" />
                  <p className="text-3xl font-bold mb-3">لا توجد منتجات</p>
                  <p className="text-xl">{search ? `لا توجد نتائج لـ "${search}"` : "لا توجد منتجات متوفرة"}</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="group relative flex flex-col p-6 bg-surface rounded-2xl hover:bg-primary/5 cursor-pointer transition-all border-2 border-border hover:border-primary hover:shadow-2xl transform hover:scale-105"
                      onClick={() => addToCart(product)}
                    >
                      <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                        اضغط للإضافة +
                      </div>
                      
                      <div className="flex flex-col items-center mb-4">
                        {product.image_url ? (
                          <img
                            src={product.image_url || "/placeholder.svg"}
                            alt={product.name}
                            className="w-32 h-32 rounded-2xl object-cover border-4 border-border group-hover:border-primary transition-colors"
                          />
                        ) : (
                          <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center border-4 border-border group-hover:border-primary transition-colors">
                            <Package size={60} className="text-primary" />
                          </div>
                        )}
                      </div>
                        
                      <div className="flex-1 text-center">
                        <h4 className="font-bold text-text text-xl mb-2 line-clamp-2">{product.name}</h4>
                        <p className="text-sm text-text-muted mb-3">كود: {product.code}</p>
                        <div className="flex items-center justify-center gap-2 mb-4">
                          <span className={`text-sm font-bold px-4 py-2 rounded-full ${
                            product.quantity > product.low_stock_threshold 
                              ? "bg-success/20 text-success border-2 border-success" 
                              : product.quantity > 0 
                              ? "bg-warning/20 text-warning border-2 border-warning"
                              : "bg-danger/20 text-danger border-2 border-danger"
                          }`}>
                            {product.quantity > 0 ? `${product.quantity} متوفر` : "نفد"}
                          </span>
                        </div>
                      </div>
                      
                      <div className="text-center pt-4 border-t-2 border-border">
                        <p className="text-sm text-text-muted mb-2">سعر البيع</p>
                        <p className="font-bold text-primary text-3xl">{formatCurrency(product.selling_price)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

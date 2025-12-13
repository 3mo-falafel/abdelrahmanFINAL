"use client"

import type React from "react"

import { useState } from "react"
import { Plus, Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createClient } from "@/lib/supabase/client"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export function AddProductDialog() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const router = useRouter()

  const [form, setForm] = useState({
    name: "",
    code: "",
    purchase_price: "",
    selling_price: "",
    quantity: "",
    low_stock_threshold: "5",
    image_url: "",
  })

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const base64 = reader.result as string
        setImagePreview(base64)
        setForm((prev) => ({ ...prev, image_url: base64 }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const supabase = createClient()

    const { error } = await supabase.from("products").insert({
      name: form.name,
      code: form.code,
      purchase_price: Number.parseFloat(form.purchase_price),
      selling_price: Number.parseFloat(form.selling_price),
      quantity: Number.parseInt(form.quantity),
      low_stock_threshold: Number.parseInt(form.low_stock_threshold),
      image_url: form.image_url || null,
    })

    if (error) {
      if (error.code === "23505") {
        toast.error("هذا الكود مستخدم بالفعل")
      } else {
        toast.error("حدث خطأ في إضافة المنتج")
      }
    } else {
      toast.success("تمت إضافة المنتج بنجاح")
      setOpen(false)
      setForm({
        name: "",
        code: "",
        purchase_price: "",
        selling_price: "",
        quantity: "",
        low_stock_threshold: "5",
        image_url: "",
      })
      setImagePreview(null)
      router.refresh()
    }
    setLoading(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-primary hover:bg-primary-light text-white rounded-xl px-6 py-6 text-lg gap-2">
          <Plus size={24} />
          إضافة منتج
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl">إضافة منتج جديد</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {/* صورة المنتج */}
          <div>
            <Label className="text-base mb-2 block">صورة المنتج</Label>
            <div className="flex items-center gap-4">
              {imagePreview ? (
                <div className="relative">
                  <img
                    src={imagePreview || "/placeholder.svg"}
                    alt="معاينة"
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setImagePreview(null)
                      setForm((prev) => ({ ...prev, image_url: "" }))
                    }}
                    className="absolute -top-2 -left-2 bg-danger text-white rounded-full p-1"
                  >
                    <X size={14} />
                  </button>
                </div>
              ) : (
                <label className="w-20 h-20 rounded-xl border-2 border-dashed border-border flex items-center justify-center cursor-pointer hover:border-primary transition-colors">
                  <Upload className="text-text-muted" size={24} />
                  <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                </label>
              )}
            </div>
          </div>

          {/* اسم المنتج */}
          <div>
            <Label htmlFor="name" className="text-base mb-2 block">
              اسم المنتج *
            </Label>
            <Input
              id="name"
              value={form.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              placeholder="مثال: قهوة عربية"
              className="text-lg py-6 rounded-xl"
              required
            />
          </div>

          {/* كود المنتج */}
          <div>
            <Label htmlFor="code" className="text-base mb-2 block">
              كود المنتج *
            </Label>
            <Input
              id="code"
              value={form.code}
              onChange={(e) => setForm((prev) => ({ ...prev, code: e.target.value }))}
              placeholder="مثال: COF001"
              className="text-lg py-6 rounded-xl font-mono"
              required
            />
          </div>

          {/* الأسعار */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="purchase_price" className="text-base mb-2 block">
                سعر الشراء *
              </Label>
              <Input
                id="purchase_price"
                type="number"
                step="0.01"
                min="0"
                value={form.purchase_price}
                onChange={(e) => setForm((prev) => ({ ...prev, purchase_price: e.target.value }))}
                placeholder="0.00"
                className="text-lg py-6 rounded-xl"
                required
              />
            </div>
            <div>
              <Label htmlFor="selling_price" className="text-base mb-2 block">
                سعر البيع *
              </Label>
              <Input
                id="selling_price"
                type="number"
                step="0.01"
                min="0"
                value={form.selling_price}
                onChange={(e) => setForm((prev) => ({ ...prev, selling_price: e.target.value }))}
                placeholder="0.00"
                className="text-lg py-6 rounded-xl"
                required
              />
            </div>
          </div>

          {/* الكمية والحد الأدنى */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="quantity" className="text-base mb-2 block">
                الكمية *
              </Label>
              <Input
                id="quantity"
                type="number"
                min="0"
                value={form.quantity}
                onChange={(e) => setForm((prev) => ({ ...prev, quantity: e.target.value }))}
                placeholder="0"
                className="text-lg py-6 rounded-xl"
                required
              />
            </div>
            <div>
              <Label htmlFor="low_stock" className="text-base mb-2 block">
                حد التنبيه
              </Label>
              <Input
                id="low_stock"
                type="number"
                min="0"
                value={form.low_stock_threshold}
                onChange={(e) => setForm((prev) => ({ ...prev, low_stock_threshold: e.target.value }))}
                placeholder="5"
                className="text-lg py-6 rounded-xl"
              />
            </div>
          </div>

          {/* زر الإضافة */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-primary-light text-white rounded-xl py-6 text-lg mt-6"
          >
            {loading ? "جاري الإضافة..." : "إضافة المنتج"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

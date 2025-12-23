"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createClient } from "@/lib/supabase/client"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import type { Product } from "@/lib/types"

interface EditProductDialogProps {
  product: Product
  open: boolean
  onOpenChange: (open: boolean) => void
  onProductUpdated?: () => void
}

export function EditProductDialog({ product, open, onOpenChange, onProductUpdated }: EditProductDialogProps) {
  const [loading, setLoading] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(product.image_url)
  const router = useRouter()

  const [form, setForm] = useState({
    name: product.name,
    code: product.code,
    purchase_price: product.purchase_price.toString(),
    selling_price: product.selling_price.toString(),
    quantity: product.quantity.toString(),
    low_stock_threshold: product.low_stock_threshold.toString(),
    image_url: product.image_url || "",
  })

  useEffect(() => {
    setForm({
      name: product.name,
      code: product.code,
      purchase_price: product.purchase_price.toString(),
      selling_price: product.selling_price.toString(),
      quantity: product.quantity.toString(),
      low_stock_threshold: product.low_stock_threshold.toString(),
      image_url: product.image_url || "",
    })
    setImagePreview(product.image_url)
  }, [product])

  // Compress image to reduce size (max 150KB after compression)
  const compressImage = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        const img = new Image()
        img.onload = () => {
          const canvas = document.createElement('canvas')
          let { width, height } = img
          
          // Max dimensions - reduce more aggressively for large images
          const maxDimension = 600
          if (width > maxDimension || height > maxDimension) {
            if (width > height) {
              height = Math.round((height / width) * maxDimension)
              width = maxDimension
            } else {
              width = Math.round((width / height) * maxDimension)
              height = maxDimension
            }
          }
          
          canvas.width = width
          canvas.height = height
          
          const ctx = canvas.getContext('2d')
          if (ctx) {
            // Use white background for transparency
            ctx.fillStyle = '#FFFFFF'
            ctx.fillRect(0, 0, width, height)
            ctx.drawImage(img, 0, 0, width, height)
          }
          
          // Start with quality 0.6 and reduce until under 150KB
          let quality = 0.6
          let result = canvas.toDataURL('image/jpeg', quality)
          
          // Reduce quality until under 150KB (base64 is ~1.37x larger than binary)
          const maxBase64Size = 150 * 1024 * 1.37
          while (result.length > maxBase64Size && quality > 0.1) {
            quality -= 0.1
            result = canvas.toDataURL('image/jpeg', quality)
          }
          
          // If still too large, reduce dimensions further
          if (result.length > maxBase64Size) {
            const scale = 0.5
            canvas.width = Math.round(width * scale)
            canvas.height = Math.round(height * scale)
            if (ctx) {
              ctx.fillStyle = '#FFFFFF'
              ctx.fillRect(0, 0, canvas.width, canvas.height)
              ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
            }
            result = canvas.toDataURL('image/jpeg', 0.5)
          }
          
          resolve(result)
        }
        img.onerror = () => {
          // If image fails to load, return empty string
          resolve('')
        }
        img.src = e.target?.result as string
      }
      reader.onerror = () => {
        resolve('')
      }
      reader.readAsDataURL(file)
    })
  }

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Show loading state
      setImagePreview('loading')
      
      // Compress image
      const compressedBase64 = await compressImage(file)
      
      if (compressedBase64) {
        setImagePreview(compressedBase64)
        setForm((prev) => ({ ...prev, image_url: compressedBase64 }))
      } else {
        // If compression failed, just skip the image
        setImagePreview(null)
        setForm((prev) => ({ ...prev, image_url: '' }))
        toast.error('حدث خطأ في معالجة الصورة')
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const supabase = createClient()

    const { error } = await supabase
      .from("products")
      .update({
        name: form.name,
        code: form.code,
        purchase_price: Number.parseFloat(form.purchase_price),
        selling_price: Number.parseFloat(form.selling_price),
        quantity: Number.parseInt(form.quantity),
        low_stock_threshold: Number.parseInt(form.low_stock_threshold),
        image_url: form.image_url || null,
        updated_at: new Date().toISOString(),
      })
      .eq("id", product.id)

    if (error) {
      if (error.code === "23505") {
        toast.error("هذا الكود مستخدم بالفعل")
      } else {
        toast.error("حدث خطأ في تحديث المنتج")
      }
    } else {
      toast.success("تم تحديث المنتج بنجاح")
      onOpenChange(false)
      if (onProductUpdated) {
        onProductUpdated()
      } else {
        router.refresh()
      }
    }
    setLoading(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl">تعديل المنتج</DialogTitle>
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
            <Label htmlFor="edit-name" className="text-base mb-2 block">
              اسم المنتج *
            </Label>
            <Input
              id="edit-name"
              value={form.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              className="text-lg py-6 rounded-xl"
              required
            />
          </div>

          {/* كود المنتج */}
          <div>
            <Label htmlFor="edit-code" className="text-base mb-2 block">
              كود المنتج *
            </Label>
            <Input
              id="edit-code"
              value={form.code}
              onChange={(e) => setForm((prev) => ({ ...prev, code: e.target.value }))}
              className="text-lg py-6 rounded-xl font-mono"
              required
            />
          </div>

          {/* الأسعار */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="edit-purchase" className="text-base mb-2 block">
                سعر الشراء *
              </Label>
              <Input
                id="edit-purchase"
                type="number"
                step="0.01"
                min="0"
                value={form.purchase_price}
                onChange={(e) => setForm((prev) => ({ ...prev, purchase_price: e.target.value }))}
                className="text-lg py-6 rounded-xl"
                required
              />
            </div>
            <div>
              <Label htmlFor="edit-selling" className="text-base mb-2 block">
                سعر البيع *
              </Label>
              <Input
                id="edit-selling"
                type="number"
                step="0.01"
                min="0"
                value={form.selling_price}
                onChange={(e) => setForm((prev) => ({ ...prev, selling_price: e.target.value }))}
                className="text-lg py-6 rounded-xl"
                required
              />
            </div>
          </div>

          {/* الكمية والحد الأدنى */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="edit-quantity" className="text-base mb-2 block">
                الكمية *
              </Label>
              <Input
                id="edit-quantity"
                type="number"
                min="0"
                value={form.quantity}
                onChange={(e) => setForm((prev) => ({ ...prev, quantity: e.target.value }))}
                className="text-lg py-6 rounded-xl"
                required
              />
            </div>
            <div>
              <Label htmlFor="edit-low-stock" className="text-base mb-2 block">
                حد التنبيه
              </Label>
              <Input
                id="edit-low-stock"
                type="number"
                min="0"
                value={form.low_stock_threshold}
                onChange={(e) => setForm((prev) => ({ ...prev, low_stock_threshold: e.target.value }))}
                className="text-lg py-6 rounded-xl"
              />
            </div>
          </div>

          {/* زر الحفظ */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-primary-light text-white rounded-xl py-6 text-lg mt-6"
          >
            {loading ? "جاري الحفظ..." : "حفظ التعديلات"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

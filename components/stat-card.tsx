import type { LucideIcon } from "lucide-react"
import { formatCurrency } from "@/lib/types"

interface StatCardProps {
  title: string
  value: number
  icon: LucideIcon
  isCurrency?: boolean
  color: "primary" | "success" | "warning" | "danger"
}

const colorClasses = {
  primary: "bg-primary/10 text-primary",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  danger: "bg-danger/10 text-danger",
}

export function StatCard({ title, value, icon: Icon, isCurrency = false, color }: StatCardProps) {
  return (
    <div className="bg-surface rounded-2xl p-6 shadow-sm border border-border">
      <div className="flex items-center justify-between mb-4">
        <span className="text-text-muted text-lg">{title}</span>
        <div className={`p-3 rounded-xl ${colorClasses[color]}`}>
          <Icon size={28} />
        </div>
      </div>
      <p className="text-3xl font-bold text-text">
        {isCurrency ? formatCurrency(value) : value.toLocaleString("ar-SA")}
      </p>
    </div>
  )
}

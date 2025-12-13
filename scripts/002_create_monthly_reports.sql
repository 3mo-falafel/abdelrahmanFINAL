-- جدول التقارير الشهرية
CREATE TABLE monthly_reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  month INTEGER NOT NULL CHECK (month >= 1 AND month <= 12),
  year INTEGER NOT NULL,
  total_sales DECIMAL(10, 2) NOT NULL DEFAULT 0,
  total_cost DECIMAL(10, 2) NOT NULL DEFAULT 0,
  total_profit DECIMAL(10, 2) NOT NULL DEFAULT 0,
  total_orders INTEGER NOT NULL DEFAULT 0,
  top_products JSONB DEFAULT '[]',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(month, year)
);

-- فهرس للبحث السريع
CREATE INDEX idx_monthly_reports_month_year ON monthly_reports(year, month);

-- سياسة الأمان
ALTER TABLE monthly_reports ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all access to monthly_reports" ON monthly_reports FOR ALL USING (true) WITH CHECK (true);

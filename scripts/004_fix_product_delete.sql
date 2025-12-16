-- Fix product deletion to allow deleting products while keeping order history
-- This script modifies the foreign key constraint on order_items

-- Step 1: Drop the existing foreign key constraint
ALTER TABLE order_items DROP CONSTRAINT IF EXISTS order_items_product_id_fkey;

-- Step 2: Make product_id nullable to preserve order history
ALTER TABLE order_items ALTER COLUMN product_id DROP NOT NULL;

-- Step 3: Add new foreign key constraint with ON DELETE SET NULL
-- This means when a product is deleted, the product_id in order_items becomes NULL
-- but the order item record (with product_name, quantity, prices) is preserved
ALTER TABLE order_items 
ADD CONSTRAINT order_items_product_id_fkey 
FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE SET NULL;

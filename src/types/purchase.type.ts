import { Product } from './product.type'

export type PurchasesStatus = -1 | 1 | 2 | 3 | 4 | 5

export type PurchaseListStatus = PurchasesStatus | 0

export interface Purchases {
  _id: string
  buy_count: number
  price: number
  price_before_discount: number
  status: PurchasesStatus
  user: string
  product: Product
  createdAt: string
  updatedAt: string
}

export interface ExtendedPurchase extends Purchases {
  disabled: boolean
  checked: boolean
}

export interface User {
  id: string
  username: string
  password: string
  createdAt: string

  // relationships
  invoices?: Invoice[]
  billingInfo?: BillingInfo[]
}

export interface Invoice {
  id: string
  userId: string
  clientName: string
  username: string
  dueDate: string
  sentDate: string
  status: string
  subtotal: number
  tax: number
  total: number

  // relationships
  client?: BillingInfo
  user?: User
  items?: InvoiceItem[]
}

export interface InvoiceItem {
  id: string
  invoiceId: string
  itemName: string
  description: string
  quantity: number
  price: number
  total: number

  // relationships
  invoice?: Invoice
}

export interface BillingInfo {
  id: string
  userId: string
  clientCompanyName: string
  clientName: string
  clientEmail: string
  clientPhoneNumber: string
  clientAddressLine1: string
  clientAddressLine2: string
  clientCity: string
  clientState: string
  clientZipCode: string
  clientCountry: string

  // relationships
  user?: User
}

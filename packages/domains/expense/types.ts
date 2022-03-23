export interface Expense {
    id: string
    user_id: string
    merchant_name: string
    amount_in_cents: bigint
    currency: string
    date_created: string
    status: string
}
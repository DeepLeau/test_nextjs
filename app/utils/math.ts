export function add(a: number, b: number): number {
  return a + b
}

export function multiply(a: number, b: number): number {
  return a * b
}

export function formatPrice(price: number): string {
  return `${price.toFixed(2)}€`
}

export function discount(price: number, percent: number): number {
  return price * (1 - percent / 100)
}

export function formatDiscount(price: number, percent: number): string {
  const discountedPrice = discount(price, percent)
  return `Prix: ${discountedPrice.toFixed(2)}€ (-${percent}%)`
}

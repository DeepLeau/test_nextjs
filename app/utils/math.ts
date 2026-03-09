export function add(a: number, b: number): number {
  return a + b
}

export function multiply(a: number, b: number): number {
  return a * b
}

export function formatPrice(price: number): string {
  return `${price.toFixed(2)}€`
}
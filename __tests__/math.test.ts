import { add, multiply, formatPrice, discount, formatDiscount } from '@/app/utils/math'

describe('math utils', () => {
  describe('add', () => {
    it('adds two positive numbers', () => {
      expect(add(2, 3)).toBe(5)
    })

    it('handles negative numbers', () => {
      expect(add(-1, 1)).toBe(0)
    })

    it('handles zero', () => {
      expect(add(5, 0)).toBe(5)
    })
  })

  describe('multiply', () => {
    it('multiplies two positive numbers', () => {
      expect(multiply(3, 4)).toBe(12)
    })

    it('handles zero', () => {
      expect(multiply(5, 0)).toBe(0)
    })

    it('handles negative numbers', () => {
      expect(multiply(-2, 3)).toBe(-6)
    })
  })

  describe('formatPrice', () => {
    it('formats price with two decimals', () => {
      expect(formatPrice(10)).toBe('10.00€')
    })

    it('formats decimal price', () => {
      expect(formatPrice(10.5)).toBe('10.50€')
    })

    it('rounds correctly', () => {
      expect(formatPrice(10.999)).toBe('11.00€')
    })
  })

  describe('discount', () => {
    it('calculates discount correctly', () => {
      expect(discount(100, 20)).toBe(80)
    })

    it('handles zero percent discount', () => {
      expect(discount(50, 0)).toBe(50)
    })

    it('handles 100 percent discount', () => {
      expect(discount(100, 100)).toBe(0)
    })

    it('handles decimal prices', () => {
      expect(discount(99.99, 10)).toBe(89.991)
    })
  })

  describe('formatDiscount', () => {
    it('formats discount string correctly', () => {
      expect(formatDiscount(100, 20)).toBe('Prix: 80.00€ (-20%)')
    })

    it('formats with decimal discounted price', () => {
      expect(formatDiscount(100, 15)).toBe('Prix: 85.00€ (-15%)')
    })

    it('handles zero discount', () => {
      expect(formatDiscount(50, 0)).toBe('Prix: 50.00€ (-0%)')
    })
  })
})

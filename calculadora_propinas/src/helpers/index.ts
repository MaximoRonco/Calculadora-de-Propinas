

export default function formatCurrency(quantity: number) {
  return new Intl.NumberFormat('en-US', { // Lo formatea en ingles
    style: 'currency', currency: 'USD' // Se convierte en USD
  }).format(quantity)
}

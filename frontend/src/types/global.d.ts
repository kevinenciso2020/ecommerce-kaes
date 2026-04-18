interface Window {
  changeItemQty: (id: string, size: string | null, color: string | null, delta: number) => void
  removeItem: (id: string, size: string | null, color: string | null) => void
}
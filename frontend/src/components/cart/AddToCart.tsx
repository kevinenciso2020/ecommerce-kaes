import { useState } from 'react'
import { addToCart } from '../../stores/cart.store.js'

interface Props {
  product: {
    id: string
    name: string
    price: number | string
    slug: string
    images?: { url: string }[]
  }
  sizes?: string[]
  colors?: string[]
}

export default function AddToCart({ product, sizes = [], colors = [] }: Props) {
  const [selectedSize,  setSelectedSize]  = useState(sizes[0]  || null)
  const [selectedColor, setSelectedColor] = useState(colors[0] || null)
  const [quantity,      setQuantity]      = useState(1)
  const [loading,       setLoading]       = useState(false)
  const [added,         setAdded]         = useState(false)

  async function handleAdd() {
    setLoading(true)
    try {
      await addToCart(product, quantity, selectedSize, selectedColor)
      setAdded(true)
      setTimeout(() => setAdded(false), 2000)
    } catch (err) {
      console.error('Error adding to cart:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="add-to-cart">
      {sizes.length > 0 && (
        <div className="variant-group">
          <p className="variant-label">Talla</p>
          <div className="variant-options">
            {sizes.map(size => (
              <button
                key={size}
                className={'variant-btn' + (selectedSize === size ? ' active' : '')}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {colors.length > 0 && (
        <div className="variant-group">
          <p className="variant-label">Color</p>
          <div className="variant-options">
            {colors.map(color => (
              <button
                key={color}
                className={'variant-btn' + (selectedColor === color ? ' active' : '')}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="quantity-row">
        <div className="quantity-control">
          <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(q => q + 1)}>+</button>
        </div>
      </div>

      <button
        className={'btn btn-primary btn-full add-btn' + (added ? ' added' : '')}
        onClick={handleAdd}
        disabled={loading || added}
      >
        {loading ? 'Agregando...' : added ? '✓ Agregado' : 'Agregar al carrito'}
      </button>

      <style>{`
        .add-to-cart { display: flex; flex-direction: column; gap: 1.25rem; }
        .variant-label { font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #52525b; margin-bottom: 0.5rem; }
        .variant-options { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .variant-btn { padding: 0.375rem 0.875rem; border: 1.5px solid #e4e4e7; border-radius: 4px; font-size: 0.85rem; cursor: pointer; background: #fff; transition: all 150ms; }
        .variant-btn:hover { border-color: #0a0a0a; }
        .variant-btn.active { border-color: #0a0a0a; background: #0a0a0a; color: #fff; }
        .quantity-row { display: flex; align-items: center; gap: 1rem; }
        .quantity-control { display: flex; align-items: center; border: 1.5px solid #e4e4e7; border-radius: 6px; overflow: hidden; }
        .quantity-control button { width: 36px; height: 36px; background: none; border: none; font-size: 1.1rem; cursor: pointer; color: #0a0a0a; }
        .quantity-control button:hover { background: #f4f4f5; }
        .quantity-control span { min-width: 36px; text-align: center; font-size: 0.9rem; font-weight: 500; }
        .add-btn { transition: all 200ms; }
        .add-btn.added { background: #166534; border-color: #166534; }
      `}</style>
    </div>
  )
}

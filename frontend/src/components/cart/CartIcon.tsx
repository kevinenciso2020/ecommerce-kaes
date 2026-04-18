import { useStore } from '@nanostores/react'
import { cartCount } from '../../stores/cart.store.js'

export default function CartIcon() {
  const count = useStore(cartCount)

  return (
    <a href="/carrito" class="icon-btn" aria-label={`Carrito (${count} productos)`} style="position:relative;display:flex;align-items:center;color:#0a0a0a;padding:0.25rem;text-decoration:none">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 01-8 0"/>
      </svg>
      {count > 0 && (
        <span style={{
          position: 'absolute',
          top: '-6px',
          right: '-6px',
          background: '#0a0a0a',
          color: '#fff',
          fontSize: '0.6rem',
          fontWeight: '600',
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {count > 99 ? '99+' : count}
        </span>
      )}
    </a>
  )
}

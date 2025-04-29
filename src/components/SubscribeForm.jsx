'use client'

import { FaRss } from 'react-icons/fa'
import styles from './Footer.module.css'  // o un CSS separado

export default function SubscribeForm() {
  return (
    <form
      className={styles.subscribeForm}
      onSubmit={e => {
        e.preventDefault()
        alert('¡Gracias por suscribirte! 🎉')
      }}
    >
      <div className={styles.inputGroup}>
        <input type="email" placeholder="Tu correo electrónico" required className={styles.input} />
        <button type="submit" className={styles.subscribeBtn}>
          <FaRss />
        </button>
      </div>
    </form>
  )
}
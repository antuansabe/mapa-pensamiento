'use client'

import Link from 'next/link'
import {
  FaEnvelope,
  FaTwitter,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Columna 1: Marca + redes */}
        <div className={styles.col}>
          <h2 className={styles.brand}>Mapa del Pensamiento</h2>
          <p className={styles.tagline}>
            Comunidad abierta que mapea el conocimiento filosófico.
          </p>
          <div className={styles.socials}>
            <a href="https://twitter.com/mapapensamiento" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://github.com/tu-usuario/mapa-pensamiento" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:contacto@mapapensamiento.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div className={styles.col}>
          <h3 className={styles.heading}>Enlaces</h3>
          <ul className={styles.list}>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/occidente">Occidente</Link></li>
            <li><Link href="/oriente">Oriente</Link></li>
            <li><Link href="/conceptos">Conceptos</Link></li>
          </ul>
        </div>

        {/* Columna 3: Más Recursos */}
        <div className={styles.col}>
          <h3 className={styles.heading}>Recursos</h3>
          <ul className={styles.list}>
            <li><Link href="/comparar">Comparar</Link></li>
            <li><Link href="/aprender">Aprender</Link></li>
            <li><Link href="https://github.com/tu-usuario/mapa-pensamiento">GitHub</Link></li>
            <li><a href="/rss.xml">RSS</a></li>
          </ul>
        </div>

        {/* Columna 4: Contacto */}
        <div className={styles.col}>
          <h3 className={styles.heading}>Contacto</h3>
          <p className={styles.contact}>
            <a href="mailto:contacto@mapapensamiento.com">contacto@mapapensamiento.com</a>
          </p>
          <p className={styles.contact}>Teléfono: +52 123 456 7890</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2024 Mapa del Pensamiento. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
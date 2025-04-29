import Head from 'next/head'
import Script from 'next/script'
import styles from './comparar.module.css'

export default function CompararPage() {
  return (
    <>
      <Head>
        <title>Comparar Filosofías – Mapa del Pensamiento</title>
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Comparador de Escuelas</h1>
          <p>Selecciona dos escuelas para ver sus puntos en común y diferencias.</p>
        </header>

        <section className={styles.selector}>
          <div className={styles.dropdownGroup}>
            <label htmlFor="escuelaA">Escuela A</label>
            <select id="escuelaA">
              <option>Estoicismo</option>
              <option>Platonismo</option>
              {/* … */}
            </select>
          </div>
          <div className={styles.dropdownGroup}>
            <label htmlFor="escuelaB">Escuela B</label>
            <select id="escuelaB">
              <option>Aristotelismo</option>
              <option>Budismo</option>
              {/* … */}
            </select>
          </div>
          <button className={styles.compareBtn}>Comparar</button>
        </section>

        <section className={styles.results}>
          <h2>Resultados</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Punto Común</h3>
              <p>Descripción…</p>
            </div>
            <div className={styles.card}>
              <h3>Diferencia</h3>
              <p>Descripción…</p>
            </div>
          </div>
        </section>
      </div>

      <Script src="/scripts/comparar.js" strategy="afterInteractive" />
    </>
  )
}
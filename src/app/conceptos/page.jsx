import Head from 'next/head'
import Script from 'next/script'
import styles from './conceptos.module.css'

export default function ConceptosPage() {
  return (
    <>
      <Head>
        <title>Conceptos Filosóficos – Mapa del Pensamiento</title>
        <meta name="description" content="Explora, filtra y aprende conceptos filosóficos: ética, moral, karma…"/>  
      </Head>

      <div className={styles.container}>
        {/* —— Hero —— */}
        <header className={styles.hero}>
          <h1>Conceptos Filosóficos</h1>
          <p>Tu repositorio interactivo de ideas como ética, moral, karma y más.</p>
          <div className={styles.search}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Buscar concepto..."
            />
            <i className={`fas fa-search ${styles.searchIcon}`} />
          </div>
        </header>

        {/* —— Categorías —— */}
        <section className={styles.categoriesSection}>
          <h2>Categorías</h2>
          <div className={styles.categoriesGrid}>
            <div className={styles.categoryCard}>
              <i className="fas fa-balance-scale" />
              <h3>Ética</h3>
              <p>Valores, virtudes y moral en la acción humana.</p>
            </div>
            <div className={styles.categoryCard}>
              <i className="fas fa-lightbulb" />
              <h3>Epistemología</h3>
              <p>Teoría del conocimiento y sus límites.</p>
            </div>
            <div className={styles.categoryCard}>
              <i className="fas fa-atom" />
              <h3>Metafísica</h3>
              <p>Naturaleza del ser, la existencia y la realidad.</p>
            </div>
            <div className={styles.categoryCard}>
              <i className="fas fa-project-diagram" />
              <h3>Lógica</h3>
              <p>Razonamiento, inferencia y argumentación.</p>
            </div>
          </div>
        </section>

        {/* —— Línea de Tiempo —— */}
        <section className={styles.timelineSection}>
          <h2>Evolución Histórica</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <span className={styles.period}>Antigua</span>
              <ul>
                <li>Logos</li>
                <li>Arché</li>
                <li>Eudaimonia</li>
              </ul>
            </div>
            <div className={styles.timelineItem}>
              <span className={styles.period}>Medieval</span>
              <ul>
                <li>Universales</li>
                <li>Fe y Razón</li>
                <li>Esencia</li>
              </ul>
            </div>
            <div className={styles.timelineItem}>
              <span className={styles.period}>Moderna</span>
              <ul>
                <li>Racionalismo</li>
                <li>Empirismo</li>
                <li>Idealismo</li>
              </ul>
            </div>
            <div className={styles.timelineItem}>
              <span className={styles.period}>Contemporánea</span>
              <ul>
                <li>Fenomenología</li>
                <li>Existencialismo</li>
                <li>Posmodernismo</li>
              </ul>
            </div>
          </div>
        </section>

        {/* —— Repositorio de Conceptos —— */}
        <section className={styles.explorerSection}>
          <h2>Repositorio de Conceptos</h2>
          <div className={styles.conceptsGrid}>
            <div className={styles.conceptCard}>
              <h3>Virtud</h3>
              <p>Excelencia de carácter que conduce a una vida buena.</p>
              <span className={styles.tag}>Ética</span>
              <button>Ver más</button>
            </div>
            <div className={styles.conceptCard}>
              <h3>Silogismo</h3>
              <p>Razonamiento deductivo basado en dos premisas.</p>
              <span className={styles.tag}>Lógica</span>
              <button>Ver más</button>
            </div>
            <div className={styles.conceptCard}>
              <h3>A priori / A posteriori</h3>
              <p>Diferencia entre conocimiento independiente o derivado de la experiencia.</p>
              <span className={styles.tag}>Epistemología</span>
              <button>Ver más</button>
            </div>
            {/* … más tarjetas … */}
          </div>
        </section>
      </div>

      <Script src="/scripts/conceptos.js" strategy="afterInteractive" />
    </>
  )
}
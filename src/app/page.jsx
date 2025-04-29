// src/app/page.jsx
import styles from './page.module.css'

export default function HomePage() {
  return (
    <main className={styles.main}>
      {/* —— Hero Compacto —— */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Fortalece tu Pensamiento Crítico
          </h1>
          <p className={styles.heroSubtitle}>
            Explora, debate y construye conocimiento filosófico en comunidad.
          </p>
          <a href="#why" className={styles.ctaPrimary}>
            ¿Por qué importa? ↓
          </a>
        </div>
        <div className={styles.heroWave} />
      </section>

      {/* —— “¿Por qué importa?” —— */}
      <section id="why" className={styles.why}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>¿Por qué el Pensamiento Crítico?</h2>
          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <i className="fas fa-brain" />
              <h3>Decisiones Informadas</h3>
              <p>Aprende a filtrar información y detectar sesgos.</p>
            </div>
            <div className={styles.whyCard}>
              <i className="fas fa-hands-helping" />
              <h3>Colaboración Comunitaria</h3>
              <p>Comparte ideas y enriquece tu perspectiva junto a otros.</p>
            </div>
            <div className={styles.whyCard}>
              <i className="fas fa-project-diagram" />
              <h3>Estructura Visual</h3>
              <p>Mapas y conexiones que revelan la evolución de las ideas.</p>
            </div>
            <div className={styles.whyCard}>
              <i className="fas fa-lightbulb" />
              <h3>Innovación y Debate</h3>
              <p>Herramientas para debatir, reflexionar y aportar tu propio valor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* —— “Un Proyecto Social y Abierto” —— */}
      <section className={styles.about}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Un Proyecto Social y Abierto</h2>
          <p className={styles.aboutText}>
            Nacimos para dar un hogar estructurado al conocimiento filosófico:
            accesible, colaborativo y siempre en crecimiento. Aquí podrás:
          </p>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <span className={styles.featureEmoji}>📚</span>
              <h4>Contenido Organizado</h4>
              <p>Por épocas, escuelas y pensadores clave.</p>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.featureEmoji}>🔗</span>
              <h4>Conexiones Visuales</h4>
              <p>Descubre influencias, oposiciones y derivaciones.</p>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.featureEmoji}>💬</span>
              <h4>Debate en Comunidad</h4>
              <p>Foros y espacios de discusión en tiempo real.</p>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.featureEmoji}>🛠️</span>
              <h4>Open Source</h4>
              <p>Contribuye directamente en GitHub y hazlo tuyo.</p>
            </div>
          </div>

          <a
            href="https://github.com/tu-usuario/mapa-pensamiento"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaSecondary}
          >
            Contribuye en GitHub
          </a>
        </div>
      </section>
    </main>
  )
}
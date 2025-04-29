// src/app/oriente/page.jsx
import React from 'react'
import styles from './oriente.module.css'

export default function OrientePage() {
  return (
    <main className={styles.orientePage}>
      {/* Encabezado */}
      <section className={styles.easternHeader}>
        <div className="container">
          <h1>Filosofía Oriental</h1>
          <p className={styles.subtitle}>
            Descubre las profundas tradiciones filosóficas de Oriente, desde el Taoísmo y el Confucianismo hasta el Budismo y el Hinduismo.
          </p>
          <div className={styles.searchContainer}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Buscar tradiciones o filósofos..."
            />
            <i className={`fas fa-search ${styles.searchIcon}`}></i>
          </div>
        </div>
      </section>

      {/* Tradiciones */}
      <section className={styles.traditionsOverview}>
        <div className="container">
          <h2>
            <span className={styles.sectionIcon}>
              <i className="fas fa-pagoda"></i>
            </span>
            Tradiciones Filosóficas
          </h2>
          <div className={styles.traditionsGrid}>
            {[
              { icon: 'yin-yang', title: 'Taoísmo', text: 'Tradición filosófica china que enfatiza vivir en armonía con el Tao.' },
              { icon: 'book', title: 'Confucianismo', text: 'Sistema de pensamiento ético y social basado en las enseñanzas de Confucio.' },
              { icon: 'dharmachakra', title: 'Budismo', text: 'Tradición filosófica y espiritual enfocada en el sufrimiento y su superación.' },
              { icon: 'om', title: 'Hinduismo', text: 'Conjunto de creencias y prácticas que incluyen dharma, karma y moksha.' },
            ].map(({ icon, title, text }) => (
              <div key={title} className={styles.traditionCard}>
                <div className={styles.traditionIcon}>
                  <i className={`fas fa-${icon}`}></i>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#" className={styles.btnMore}>Explorar</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contexto histórico */}
      <section className={styles.historicalContext}>
        <div className="container">
          <h2>
            <span className={styles.sectionIcon}>
              <i className="fas fa-history"></i>
            </span>
            Contexto Histórico
          </h2>
          <div className={styles.timelineContainer}>
            <div className={styles.timelineScroll}>
              {[
                { label: 'Antiguo (hasta 500 a.C.)', years: '2500 a.C. – 500 a.C.' },
                { label: 'Clásico (500 a.C. – 500 d.C.)', years: '500 a.C. – 500 d.C.' },
                { label: 'Medieval (500 – 1500)', years: '500 – 1500' },
                { label: 'Moderno (1500 – 1900)', years: '1500 – 1900' },
                { label: 'Contemporáneo (1900 – Presente)', years: '1900 – Presente' },
              ].map(({ label, years }) => (
                <div key={label} className={styles.timelinePeriod}>
                  <h4>{label}</h4>
                  <p className={styles.periodYears}>{years}</p>
                  <div className={styles.periodIndicator}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Explorar escuelas */}
      <section className={styles.schoolsExplorer}>
        <div className="container">
          <h2>
            <span className={styles.sectionIcon}>
              <i className="fas fa-graduation-cap"></i>
            </span>
            Escuelas de Pensamiento
          </h2>
          <div className={styles.filters}>
            <h3>Filtros</h3>
            <div className={styles.filterChips}>
              {['Taoísmo','Confucianismo','Budismo','Hinduismo','Antiguo','Clásico'].map(f => (
                <button key={f} className={styles.filterChip}>{f}</button>
              ))}
            </div>
          </div>
          <div className={styles.philosophyGrid}>
            {[
              { title: 'Escuela Chan', period: 'Medieval', region: 'China', founder: 'Siglo VI' },
              { title: 'Vedanta', period: 'Clásico', region: 'India', founder: 'Adi Shankara' },
            ].map(({ title, period, region, founder }) => (
              <div key={title} className={styles.philosophyCard}>
                <h3>{title}</h3>
                <div className={styles.cardMeta}>
                  <span className={styles.period}>{period}</span>
                  <span className={styles.region}>{region}</span>
                </div>
                <p>
                  {title==='Escuela Chan'
                    ? 'Escuela budista china que enfatiza la meditación y la iluminación súbita.'
                    : 'Escuela hindú que explora la naturaleza del ser y la realidad última.'
                  }
                </p>
                <div className={styles.cardFooter}>
                  <span className={styles.founder}>Originada: {founder}</span>
                  <button className={styles.btnMore}>Leer más</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conceptos fundamentales */}
      <section className={styles.keyConcepts}>
        <div className="container">
          <h2>
            <span className={styles.sectionIcon}>
              <i className="fas fa-lightbulb"></i>
            </span>
            Conceptos Fundamentales
          </h2>
          <div className={styles.conceptsGrid}>
            {[
              { icon: 'yin-yang', title: 'Yin-Yang', tag: 'Taoísmo' },
              { icon: 'book', title: 'Ren (仁)', tag: 'Confucianismo' },
              { icon: 'dharmachakra', title: 'Śūnyatā', tag: 'Budismo' },
              { icon: 'om', title: 'Karma', tag: 'Hinduismo' },
            ].map(({ icon, title, tag }) => (
              <div key={title} className={styles.conceptCard}>
                <div className={styles.conceptIcon}>
                  <i className={`fas fa-${icon}`}></i>
                </div>
                <h3>{title}</h3>
                <span className={styles.traditionTag}>{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conexiones */}
      <section className={styles.interconnections}>
        <div className="container">
          <h2>
            <span className={styles.sectionIcon}>
              <i className="fas fa-project-diagram"></i>
            </span>
            Conexiones entre Tradiciones
          </h2>
          <div className={styles.connectionsContainer}>
            <div className={styles.connectionDiagram}>
              <img
                src="/assets/images/eastern-connections.svg"
                alt=""
                className={styles.connectionImage}
              />
            </div>
            <div className={styles.connectionDescription}>
              <p>Explora las influencias mutuas entre las tradiciones filosóficas de Oriente a lo largo de la historia.</p>
              <button className={styles.btnInteractive}>Modo interactivo</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
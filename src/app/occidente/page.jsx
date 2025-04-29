"use client";

import React from "react";
import Image from "next/image";
import styles from "./occidente.module.css";

export default function OccidentePage() {
  return (
    <main className={styles.occidentePage}>
      {/* 1. Header */}
      <section className={styles.westernHeader}>
        <div className={styles.container}>
          <h1>Filosofía Occidental</h1>
          <p className={styles.subtitle}>
            Explora la rica tradición del pensamiento filosófico occidental, desde los presocráticos hasta la filosofía contemporánea.
          </p>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Buscar escuelas o filósofos..."
              className={styles.searchInput}
            />
          </div>
        </div>
      </section>

      {/* 2. Línea de tiempo de periodos */}
      <section className={styles.periodsSection}>
        <div className={styles.container}>
          <h2><span className={styles.sectionIcon}>📜</span> Línea de Tiempo Filosófica</h2>
          <div className={styles.timelineContainer}>
            <div className={styles.timelineScroll}>
              <div className={styles.timelinePeriod}>
                <h4>Filosofía Antigua</h4>
                <p className={styles.periodYears}>600 a.C. – 400 d.C.</p>
                <div className={styles.periodDesc}>Desde los presocráticos hasta el neoplatonismo</div>
                <div className={styles.periodIndicator}></div>
              </div>
              <div className={styles.timelinePeriod}>
                <h4>Filosofía Medieval</h4>
                <p className={styles.periodYears}>400 – 1400</p>
                <div className={styles.periodDesc}>Escolástica, teología y filosofía islámica</div>
                <div className={styles.periodIndicator}></div>
              </div>
              <div className={styles.timelinePeriod}>
                <h4>Filosofía Moderna</h4>
                <p className={styles.periodYears}>1400 – 1900</p>
                <div className={styles.periodDesc}>Racionalismo, empirismo e idealismo</div>
                <div className={styles.periodIndicator}></div>
              </div>
              <div className={styles.timelinePeriod}>
                <h4>Filosofía Contemporánea</h4>
                <p className={styles.periodYears}>1900 – Presente</p>
                <div className={styles.periodDesc}>Fenomenología, existencialismo, analítica</div>
                <div className={styles.periodIndicator}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Explorador de escuelas */}
      <section className={styles.schoolsExplorer}>
        <div className={styles.container}>
          <h2><span className={styles.sectionIcon}>🏛️</span> Escuelas Filosóficas</h2>
          <div className={styles.filters}>
            <h3>Filtros</h3>
            <div className={styles.filterChips}>
              {["Antigua","Medieval","Moderna","Contemporánea","Metafísica","Ética"].map(f => (
                <button key={f} className={styles.filterChip}>{f}</button>
              ))}
            </div>
          </div>
          <div className={styles.philosophyGrid}>
            {/* Ejemplo de card */}
            <div className={styles.philosophyCard}>
              <h3>Platonismo</h3>
              <div className={styles.cardMeta}>
                <span className={styles.periodTag}>Antigua</span>
                <span className={styles.regionTag}>Grecia</span>
              </div>
              <p>
                Escuela fundada por Platón que sostiene un mundo de ideas perfectas separado del material.
              </p>
              <div className={styles.cardFooter}>
                <span>Fundador: Platón</span>
                <button className={styles.btnMore}>Leer más</button>
              </div>
            </div>
            {/* … otras cards */}
          </div>
        </div>
      </section>

      {/* 4. Conceptos clave */}
      <section className={styles.keyConcepts}>
        <div className={styles.container}>
          <h2><span className={styles.sectionIcon}>💡</span> Conceptos Clave</h2>
          <div className={styles.conceptsGrid}>
            {/* … tarjetas de concepto */}
          </div>
        </div>
      </section>

      {/* 5. Mapa de influencias */}
      <section className={styles.influencesMap}>
        <div className={styles.container}>
          <h2><span className={styles.sectionIcon}>🔗</span> Mapa de Influencias</h2>
          <p className={styles.influencesDesc}>
            Conexiones entre las principales escuelas y filósofos occidentales.
          </p>
          <div className={styles.influencesViz}>
            <Image
              src="/assets/images/western-influences.svg"
              alt="Mapa de influencias occidentales"
              width={900}
              height={500}
            />
          </div>
        </div>
      </section>

      {/* 6. Filósofos destacados */}
      <section className={styles.philosophersSpotlight}>
        <div className={styles.container}>
          <h2><span className={styles.sectionIcon}>👤</span> Filósofos Destacados</h2>
          <div className={styles.philosophersCarousel}>
            {/* … tarjetas de filósofos */}
          </div>
        </div>
      </section>
    </main>
  );
}
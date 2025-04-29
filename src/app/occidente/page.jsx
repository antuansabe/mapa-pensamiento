"use client";

import React from "react";
import Image from "next/image";
import styles from "./occidente.module.css";

export default function OccidentePage() {
  return (
    <main className={styles.occidentePage}>
      {/* 1. Header Elegante */}
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

      {/* 2. Línea de tiempo interactiva */}
      <section className={styles.periodsSection}>
        <div className={styles.container}>
          <h2>
            <span className={styles.sectionIcon}>📜</span> Línea de Tiempo Filosófica
          </h2>
          <div className={styles.timelineContainer}>
            <div className={styles.timelineScroll}>
              {["Antigua", "Medieval", "Moderna", "Contemporánea"].map((period, index) => (
                <div key={index} className={styles.timelinePeriod}>
                  <h4>Filosofía {period}</h4>
                  <p className={styles.periodYears}>Años relevantes</p>
                  <div className={styles.periodDesc}>Breve descripción del periodo</div>
                  <div className={styles.periodIndicator}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Explorador de escuelas con filtros mejorados */}
      <section className={styles.schoolsExplorer}>
        <div className={styles.container}>
          <h2>
            <span className={styles.sectionIcon}>🏛️</span> Escuelas Filosóficas
          </h2>
          <div className={styles.filters}>
            <div className={styles.filterChips}>
              {["Antigua", "Medieval", "Moderna", "Contemporánea", "Metafísica", "Ética"].map((f) => (
                <button key={f} className={styles.filterChip}>{f}</button>
              ))}
            </div>
          </div>
          <div className={styles.philosophyGrid}>
            <div className={styles.philosophyCard}>
              <h3>Platonismo</h3>
              <div className={styles.cardMeta}>
                <span className={styles.periodTag}>Antigua</span>
                <span className={styles.regionTag}>Grecia</span>
              </div>
              <p>Escuela fundada por Platón...</p>
              <button className={styles.btnMore}>Leer más</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

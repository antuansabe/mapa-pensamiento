// src/app/page.js
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h2>Explora el Pensamiento Filosófico</h2>
          <p>Un viaje a través de las tradiciones, escuelas y conceptos que han moldeado nuestra comprensión del mundo.</p>
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Buscar escuelas, conceptos o figuras..."
            />
            <i className="fas fa-search search-icon" />
          </div>
        </div>
      </section>

      <section className="filters-section">
        <div className="container">
          <h2>Filtrar por</h2>
          <div className="filter-chips">
            <button className="filter-chip" data-filter="concept:metafisica">Metafísica</button>
            <button className="filter-chip" data-filter="concept:etica">Ética</button>
            <button className="filter-chip" data-filter="concept:epistemologia">Epistemología</button>
            <button className="filter-chip" data-filter="figure:platon">Platón</button>
            <button className="filter-chip" data-filter="figure:aristoteles">Aristóteles</button>
          </div>
        </div>
      </section>

      <section className="schools-section">
        <div className="container">
          <h2>Escuelas Filosóficas</h2>
          <div className="philosophy-grid">
            {/* Aquí luego mapearemos tus datos */}
          </div>
        </div>
      </section>

      {/* TODO: copia las otras secciones de index.html de la misma forma */}
    </>
  );
}
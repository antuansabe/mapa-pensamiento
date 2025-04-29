// src/components/Footer.js
export default function Footer() {
    return (
      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Enlaces Rápidos</h3>
            <ul>
              <li><a href="/occidente">Filosofía Occidental</a></li>
              <li><a href="/oriente">Filosofía Oriental</a></li>
              <li><a href="/conceptos">Conceptos</a></li>
              <li><a href="/compare">Comparar</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contacto</h3>
            <ul>
              <li><a href="mailto:contacto@mapapensamiento.com">contacto@mapapensamiento.com</a></li>
              <li><a href="https://twitter.com/mapapensamiento">@mapapensamiento</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Sobre Nosotros</h3>
            <p>Mapa del Pensamiento es una plataforma educativa dedicada a explorar y compartir el conocimiento filosófico de manera accesible e interactiva.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Mapa del Pensamiento. Todos los derechos reservados.</p>
        </div>
      </footer>
    );
  }
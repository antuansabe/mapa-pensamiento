// src/components/NavBar.js
import Link from "next/link";

export default function NavBar() {
  const links = [
    { href: "/", label: "Inicio" },
    { href: "/occidente", label: "Occidente" },
    { href: "/oriente", label: "Oriente" },
    { href: "/conceptos", label: "Conceptos" },
    { href: "/compare", label: "Comparar" },
    { href: "/learning", label: "Aprender" },
  ];

  return (
    <header className="main-header">
      <nav className="main-nav">
        <Link href="/" className="nav-brand">
          <h1>
            <i className="fas fa-brain"></i> Mapa del Pensamiento
          </h1>
        </Link>
        <div className="nav-links">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className="nav-link">
              {label}
            </Link>
          ))}
        </div>
        <button className="icon-button theme-toggle">
          <i className="fas fa-moon"></i>
        </button>
      </nav>
    </header>
  );
}
// src/components/NavBar.js
import Link from "next/link";
import styles from './NavBar.module.css';

export default function NavBar() {
  const links = [
    { href: "/", label: "Inicio" },
    { href: "/occidente", label: "Occidente" },
    { href: "/oriente", label: "Oriente" },
    { href: "/conceptos", label: "Conceptos" },
    { href: "/comparar", label: "Comparar" },
    { href: "/aprender", label: "Aprender" },
  ];

  return (
    <header className={styles.navbar}>
      <nav className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <h1>
            <i className="fas fa-brain"></i> Mapa del Pensamiento
          </h1>
        </Link>
        <div className={styles.menu}>
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className={styles.menuItem}>
              {label}
            </Link>
          ))}
        </div>
        <button className={styles.toggle}>
          <i className="fas fa-moon"></i>
        </button>
      </nav>
    </header>
  );
}
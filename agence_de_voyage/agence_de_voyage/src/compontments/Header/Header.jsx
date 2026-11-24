import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h2 className={styles.logo}>Travel</h2>

      <nav className={styles.nav}>
        <a href="#accueil">Accueil</a>
        <a href="#destinations">Destinations</a>
        <a href="#inscription">Inscription</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
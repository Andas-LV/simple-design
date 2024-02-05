import styles from "./Burger.module.css";

export default function Burger({ active, onClick }) {
  if (active) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.navItems}>
          <a href={'/'}>Home</a>
          {["Test", "Catalog", "About", "Prices", "Contacs"].map((item) => (
            <a key={item} className={styles.navItem} href={`/${item}`}>
              {item}
            </a>
          ))}
        </div>
      </div>
    );
  }

  return null;
}

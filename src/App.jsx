import { useState } from "react";

import menuImage from "./assets/icons/menu.svg";

import styles from "./index.module.scss";


function App() {
  const [toggleHeader, setToggleHeader] = useState(false);

  return (
    <header>
      <div id={styles.headerContainer}>
        <div id={styles.titleSection}>
          <h1>navbar app</h1>

          <button onClick={() => setToggleHeader(!toggleHeader)} >
            <img src={menuImage} alt="imageAlt" />
          </button>
        </div>

        <ul className={`${styles.itemsSection} ${toggleHeader ? styles.on : styles.off}`}>
          <li><a href="/">inicio</a></li>
          <li><a href="/">nosotros</a></li>
          <li><a href="/">contacto</a></li>
        </ul>
      </div>
    </header>
  )
}

export default App

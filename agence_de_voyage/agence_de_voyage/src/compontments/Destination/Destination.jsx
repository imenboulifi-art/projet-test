import { useState } from "react";
import styles from "./Destination.module.css";

function Destination({ image, title, country, description, price }) {
  const [afficherDetails, setAfficherDetails] = useState(false);
  const [estFavori, setEstFavori] = useState(false);
  const [message, setMessage] = useState("");

  function basculerDetails() {
    setAfficherDetails(!afficherDetails);
  }

  function basculerFavori() {
    if (estFavori) {
      setMessage("Cette destination est déjà dans vos favoris");
    } else {
      setEstFavori(true);
      setMessage("");
    }
  }

  function reinitialiser() {
    setAfficherDetails(false);
    setEstFavori(false);
    setMessage("");
  }

  return (
    <article className={styles.destination}>
      <img className={styles.image} src={image} alt={title} />
      <h3 className={styles.titre}>{title}</h3>
      <p className={styles.pays}>{country}</p>

      {afficherDetails && <p className={styles.description}>{description}</p>}

      <p className={styles.prix}>{price}</p>

      <div className={styles.boutons}>
        <button className={styles.btnDetails} onClick={basculerDetails}>
          {afficherDetails ? "Masquer les détails" : "Voir les détails"}
        </button>

        <button
          className={`${styles.btnFavori} ${estFavori ? styles.actif : ""}`}
          onClick={basculerFavori}
        >
          {estFavori ? "❤ Dans mes favoris" : "♡ Ajouter aux favoris"}
        </button>

        <button className={styles.btnReset} onClick={reinitialiser}>
          Réinitialiser
        </button>
      </div>

      {message && <p className={styles.message}>{message}</p>}
    </article>
  );
}

export default Destination;
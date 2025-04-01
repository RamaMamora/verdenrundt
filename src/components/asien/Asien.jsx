import PageHeader from "../pageHeader/PageHeader";
import headerImg from "../../assets/asien-header.jpg";
import { Link } from "react-router-dom";
import styles from "./asien.module.css";

const Asien = () => {
  return (
    <>
      <PageHeader headerImg={headerImg} showButtons={false} />
      <h2 className={styles.header}>Besøgte lande i Asien</h2>
      <article className={styles.asien}>
        {[
          {
            src: "/maafushi.jpg",
            alt: "maafushi",
            label: "Maafushi, Maldiverne",
            link: "/Maafushi",
          },
          { src: "/tokyo.jpg", alt: "tokyo", label: "Tokyo", link: "#" },
          { src: "/bangkok.jpg", alt: "bangkok", label: "Bangkok", link: "#" },
          { src: "/bali.jpg", alt: "bali", label: "Bali", link: "#" },
        ].map((place, index) => (
          <div key={index} className={`${styles.card} ${styles.fadeIn}`}>
            <Link to={place.link} className={styles.link}>
              <img src={place.src} alt={place.alt} className={styles.image} />
              <span className={styles.label}>{place.label}</span>
            </Link>
          </div>
        ))}
      </article>
    </>
  );
};

export default Asien;

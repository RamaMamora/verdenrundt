import { Link } from "react-router-dom";
import styles from "./destination.module.css";

// Destination-komponenten modtager en prop 'isFrontPage' for at vide, om den vises på forsiden eller ej
const Destination = ({ isFrontPage }) => {
  return (
    <>
      <article className={styles.destination}>
        <h2 className={styles.header}>Destinationer</h2>
        <div className={styles.images}>
          {/* En liste med kontinenter og deres information */}
          {[
            {
              src: "/asien.jpg",
              alt: "asien",
              label: "Asien",
              cities: ["Maafushi", "Tokyo", "Bangkok", "Bali"], // Liste over byer i Asien
              link: "/Asien",
            },
            {
              src: "/afrika.jpg",
              alt: "afrika",
              label: "Afrika",
              cities: ["Nairobi", "Lagos"],
              link: "/Afrika",
            },
            {
              src: "/europa.jpg",
              alt: "europa",
              label: "Europa",
              cities: ["Paris", "København", "Prag", "Budapest"],
              link: "/Europa",
            },
            {
              src: "/mellemosten.jpg",
              alt: "mellemøsten",
              label: "Mellemøsten",
              cities: ["Dubai", "Aleppo", "Doha", "Istanbul"],
              link: "/Mellemøsten",
            },
            {
              src: "/nordamerica.jpg",
              alt: "nordAmerika",
              label: "NordAmerica",
              cities: ["New York", "Toronto"],
              link: "/NordAmerica",
            },
            {
              src: "/sydamaerica.jpg",
              alt: "sydAmerika",
              label: "SydAmerica",
              cities: ["Lima", "Santiago"],
              link: "/SydAmerica",
            },
          ].map((continent, index) => (
            <article key={index} className={`${styles.img} ${styles.zoomIn}`}>
              {/*  Klikbart billede, som linker til kontinentets side */}
              <Link to={continent.link} className={styles.imageContainer}>
                <img
                  src={continent.src}
                  alt={continent.alt}
                  className={styles.image}
                />
                <div className={styles.overlay}>{continent.label}</div>
              </Link>

              {/* Vis kun by-links, hvis det IKKE er forsiden */}
              {!isFrontPage && (
                <div className={styles.citys}>
                  {continent.cities.map((city, i) => (
                    // link til den specifikke by
                    <Link key={i} to={`/${city}`} className={styles.cityLink}>
                      {city}
                    </Link>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </article>
    </>
  );
};

export default Destination;

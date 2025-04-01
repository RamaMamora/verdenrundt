import styles from "./intro.module.css";
const Intro = () => {
  return (
    <>
      <div className={styles.intro}>
        <article className={styles.introLinks}>
          <h3>SENESTE INDLÆG</h3>
          <a href="/Maafushi">Maafushi, Maldiverne</a>
          <a href="">Paris, Frankrig</a>
          <a href="">Aleppo, Syrien</a>
          <a href="">Istanbul, Tyrkiet</a>
        </article>
        <div className={styles.introInfo}>
          <img src="/rama-mamora.jpeg" alt="rama mamora" />
          <h3>Hej, Her er jeg</h3>
          <p>
            Mit navn er Rama, og jeg er personen bag denne blog, som handler om
            min passion for at rejse, opleve nye steder og udforske verden. Læs
            om min historie og hvad du kan finde på bloggen{" "}
            <a href="/About">HER</a>.
          </p>
        </div>
      </div>
    </>
  );
};
export default Intro;

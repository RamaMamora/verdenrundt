import PageHeader from "../components/pageHeader/PageHeader";
import styles from "../styles/about.module.css";
import headerImg from "../assets/forsiden.jpg";
const About = () => {
  return (
    <>
      <PageHeader
        headerImg={headerImg}
        title="Velkommen"
        text="Her får du min rejsehistorie og en kort introduktion til bloggen"
        showButtons={false}
      />
      <article className={styles.about}>
        <div className={styles.aboutSection}>
          {" "}
          <div className={styles.aboutText}>
            <h3>Hej, og velkommen til min rejseblog! 🌍</h3>
            <p>
              Mit navn er Rama, og jeg er personen bag denne blog, som handler
              om min passion for at rejse, opleve nye steder og udforske verden.
              Jeg har skabt denne hjemmeside som mit personlige fristed – en
              måde at samle mine minder og dele dem med dig, der også drømmer om
              nye eventyr.
            </p>
          </div>
          <img src="/rama-mamora.jpeg" alt="rama mamora" />
        </div>

        <div className={styles.aboutSection}>
          <img src="/about-me.jpg" alt="" />
          <div className={styles.aboutText}>
            <h3>Hvorfor denne blog?</h3>
            <p>
              Rejser har altid været en stor del af mit liv, fordi de giver mig
              mere end bare billeder og souvenirs. For mig handler det om
              oplevelser, historier og de små øjeblikke, der ændrer vores
              perspektiv. Jeg startede denne blog for at:
              <br />
              Dele min passion: Jeg elsker at skrive om de steder, jeg besøger,
              hvad jeg oplever, og hvad der gør hvert sted unikt. Inspirere
              andre: Jeg vil vise, at rejser kan være for alle, uanset om du
              planlægger den store drømmerejse eller bare vil udforske din egen
              by lidt mere. Bevare minder: Denne blog er også mit personlige
              rejsearkiv, hvor jeg gemmer de øjeblikke og steder, som betyder
              noget for mig.
            </p>
          </div>
        </div>
        <div className={styles.aboutSection}>
          <div className={styles.aboutText}>
            <h3>Tak, fordi du er her!</h3>
            <p>
              Jeg håber, min blog kan være til inspiration, når du planlægger
              din næste rejse – eller måske blot en måde at dagdrømme lidt om
              verden på. Hvis du har spørgsmål eller vil dele dine egne
              rejsehistorier, så skriv endelig til mig. Jeg elsker at høre fra
              andre eventyrlystne sjæle. 😊
            </p>
          </div>
          <img src="/food.jpg" alt="" />
        </div>
      </article>
    </>
  );
};
export default About;

import PageHeader from "../pageHeader/PageHeader";
import headerImg from "../../assets/Maafushi.jpg";
import styles from "./maafushi.module.css";
const Maafushi = () => {
  return (
    <>
      <PageHeader headerImg={headerImg} showButtons={false} />
      <article className={styles.maafushiSection}>
        {" "}
        <h2>Maafushi, Maldiverne</h2>
        <div className={styles.maafushiInfo}>
          <h3>Min rejse til Maafushi, Maldiverne</h3>
          <p>
            Maldiverne har altid været drømmedestinationen for mange – med hvide
            sandstrande, turkist vand og svajende palmer. På min rejse besøgte
            jeg Maafushi, en lille ø beliggende i Kaafu-atollen, kun 45
            minutters speedbådsrejse fra Malé, hovedstaden på Maldiverne.
          </p>
          <h3>Maafushi: En perle for rejsende</h3>
          <p>
            I modsætning til mange af Maldivernes private luksusresorts, er
            Maafushi en lokal ø, der er kendt for sin autentiske stemning og
            budgetvenlige muligheder. Her kan du opleve det bedste af Maldiverne
            uden at sprænge banken.
          </p>
          <br />
          <p>
            Strandene: Øens hovedstrand er opdelt i to sektioner – en
            "bikini-strand", hvor turister frit kan bade i badetøj, og en mere
            traditionel strand for de lokale. Vandet er så krystalklart, at du
            kan se fisk svømme omkring dine fødder. Vejret: Solen skinner næsten
            konstant, og temperaturen holder sig behagelig mellem 27-30 °C året
            rundt.
          </p>
          <div className={styles.maafushiImg}>
            {" "}
            <img src="/maafushi-trae.jpg" alt="" />
            <img src="/maafushi-rest.jpg" alt="" />
          </div>{" "}
        </div>
        <div className={styles.maafushiInfo}>
          {" "}
          <h3>Snorkling og dykning</h3>
          <p>
            Et af højdepunkterne på Maafushi er de fantastiske snorkel- og
            dykkersteder omkring øen. Jeg tog på en snorkeltur og fik øje på
            havskildpadder, farverige koralrev og endda en revhaj (helt ufarlig,
            selvfølgelig!).
          </p>
          <div className={styles.maafushiImg}>
            <img src="/snorkling.jpg" alt="" />
          </div>
        </div>
        <div className={styles.maafushiInfo}>
          <h3>Sandbanker</h3>
          <p>
            En dag tog jeg en bådtur til en nærliggende sandbanke – et lille
            stykke hvidt sand midt i det turkise hav. Det føltes som at være i
            en scene fra en film! Her spiste jeg frokost, svømmede i det varme
            vand og slappede af under en parasol.
          </p>
          <h3>Delfinsafari</h3>
          <p>
            En tidlig morgen tog jeg på en delfinsafari, hvor vi så flokke af
            vilde delfiner danse i vandet ved solopgang. Det var en magisk
            oplevelse, som jeg aldrig vil glemme.
          </p>
          <div className={styles.maafushiImg}>
            {" "}
            <img src="/delfin.jpg" alt="" />
          </div>

          <h3>Maden på Maafushi</h3>
          <p>
            Øens små restauranter serverer alt fra friskfanget fisk til
            traditionelle maldiviske retter som mas huni (revet tun blandet med
            kokos og chili). Jeg nød især grillmiddage ved stranden, hvor jeg
            spiste grillet hummer og fisk, mens bølgerne skyllede ind mod
            kysten.
          </p>
          <div className={styles.maafushiImg}>
            {" "}
            <img src="/rikke.jpg" alt="" />
            <img src="/grilmad.jpg" alt="" />
          </div>
        </div>
      </article>
    </>
  );
};
export default Maafushi;

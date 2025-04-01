import PageHeader from "../components/pageHeader/PageHeader";
import headerImg from "../assets/forsiden.jpg";
import Intro from "../components/intro/Intro";
import Destination from "../components/destination/Destination";

const Home = () => {
  return (
    <>
      <PageHeader
        headerImg={headerImg}
        title="Her deler jeg guides, fortællinger og billeder fra vores rejser rundt i hele verden."
        knap="Om os"
        guides="Guides"
        showButtons={true}
      />
      <Intro />
      {/* Her sætter vi isFrontPage til true for at skjule by-links på forsiden */}
      <Destination isFrontPage={true} />
    </>
  );
};

export default Home;

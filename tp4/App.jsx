import "./App.css";
import Header from "./compontments/header/header";
import Destination from "./compontments/destination/destination";
import Footer from "./compontments/footer/footer";
import Rome from "./assets/Rome.jpg";
import Santorini from "./assets/Santorini.jpg";
import Bali from "./assets/bali.jpg";

const destinations = [
  {
    image: Rome,
    title: "Rome",
    country: "Italie",
    description: "Explorez la ville éternelle, ses monuments antiques et ses ruelles emblématiques.",
    price: "À partir de 780 DT",
  },
  {
    image: Santorini,
    title: "Santorin",
    country: "Grèce",
    description: "Découvrez les villages blancs et les couchers de soleil sur la mer Égée.",
    price: "À partir de 920 DT",
  },
  {
    image: Bali,
    title: "Bali",
    country: "Indonésie",
    description: "Un séjour relaxant entre temples, paysages verdoyants et plages tropicales.",
    price: "À partir de 1 150 DT",
  },
];

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" id="accueil">
          <p className="eyebrow">Votre prochaine aventure commence ici</p>
          <h1>Explorez le monde autrement</h1>
          <p className="hero-description">
            Des séjours soigneusement sélectionnés pour créer des souvenirs
            inoubliables.
          </p>
          <a className="hero-button" href="#destinations">
            Découvrir nos destinations
          </a>
        </section>

        <section className="destinations-section" id="destinations">
          <div className="section-heading">
            <p className="eyebrow">Nos coups de cœur</p>
            <h2>Destinations populaires</h2>
          </div>
          <div className="destinations-grid">
            {destinations.map((destination) => (
              <Destination key={destination.title} {...destination} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;


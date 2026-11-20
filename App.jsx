import "./App.css";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Destinations from "./Components/Destinations/Destinations";
import Formulaire from "./Components/Formulaire/Formulaire";
import Reservation from "./Components/Reservation/Reservation";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Destinations />
        <Formulaire />
        <Reservation />
      </main>

      <Footer />
    </div>
  );
}

export default App;
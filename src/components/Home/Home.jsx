import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <main className="home">
      <section className="home__hero">
        <h1 className="home__title">
          Encuentra inspiración para tu próxima comida
        </h1>
        <p className="home__description">
          RecipeFinder es un explorador interactivo de recetas globales
          conectado con la API de TheMealDB. Busca platos por ingredientes,
          explora instrucciones paso a paso y descubre nuevas ideas culinarias.
        </p>
        <Link to="/search" className="home__button">
          Explorar Recetas
        </Link>
      </section>
    </main>
  );
}

export default Home;

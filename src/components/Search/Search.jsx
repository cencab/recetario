import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import RecipeCard from "../RecipeCard/RecipeCard";
import Preloader from "../Preloader/Preloader";
import { CARDS_PER_PAGE, NOT_FOUND_MESSAGE } from "../../utils/constants";
import "./Search.css";

function Search({
  onSearch,
  meals,
  isLoading,
  hasSearched,
  errorMessage,
  onCardClick,
}) {
  const [visibleCount, setVisibleCount] = useState(CARDS_PER_PAGE);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + CARDS_PER_PAGE);
  };

  return (
    <main className="search-page">
      <div className="search-page__container">
        <h2 className="search-page__title">Explora y descubre recetas</h2>

        <SearchForm
          onSearch={(keyword) => {
            setVisibleCount(CARDS_PER_PAGE);
            onSearch(keyword);
          }}
        />

        {/* Estado de carga con el Preloader */}
        {isLoading && <Preloader />}

        {/* Mensaje de error general de la API */}
        {!isLoading && errorMessage && (
          <p className="search-page__status-text">{errorMessage}</p>
        )}

        {/* Mensaje cuando no se encuentra nada */}
        {!isLoading && hasSearched && meals.length === 0 && !errorMessage && (
          <div className="search-page__not-found">
            <p className="search-page__status-text">{NOT_FOUND_MESSAGE}</p>
          </div>
        )}

        {/* Bloque de resultados */}
        {!isLoading && meals.length > 0 && (
          <section className="search-page__results">
            <div className="search-page__grid">
              {meals.slice(0, visibleCount).map((meal) => (
                <RecipeCard
                  key={meal.idMeal}
                  meal={meal}
                  onCardClick={onCardClick}
                />
              ))}
            </div>

            {/* Botón Mostrar más (visible sólo si quedan elementos por mostrar) */}
            {visibleCount < meals.length && (
              <button
                type="button"
                className="search-page__more-button"
                onClick={handleShowMore}
              >
                Mostrar más
              </button>
            )}
          </section>
        )}
      </div>
    </main>
  );
}

export default Search;

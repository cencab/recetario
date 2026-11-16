import "./RecipeCard.css";

function RecipeCard({ meal, onCardClick }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onCardClick(meal);
    }
  };

  return (
    <article
      className="recipe-card"
      onClick={() => onCardClick(meal)}
      onKeyDown={handleKeyDown}
      tabIndex="0"
      role="button"
      aria-label={`Ver receta de ${meal.strMeal}`}
    >
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="recipe-card__image"
        loading="lazy"
      />
      <div className="recipe-card__content">
        <span className="recipe-card__category">
          {meal.strCategory || "General"}
        </span>
        <h3 className="recipe-card__title">{meal.strMeal}</h3>
      </div>
    </article>
  );
}

export default RecipeCard;

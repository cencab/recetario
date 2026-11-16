import "./RecipeCard.css";

function RecipeCard({ meal, onCardClick }) {
  return (
    <article className="recipe-card" onClick={() => onCardClick(meal)}>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="recipe-card__image"
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

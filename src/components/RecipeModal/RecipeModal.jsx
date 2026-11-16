import { useEffect, useRef } from "react";
import "./RecipeModal.css";

function RecipeModal({ meal, onClose }) {
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    previousFocusRef.current = document.activeElement;

    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }

      if (e.key === "Tab") {
        const focusableElements = document.querySelectorAll(
          ".modal__close-button, .modal__video-link",
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    };
  }, [onClose]);

  if (!meal) return null;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim()) {
      ingredients.push(`${measure ? measure.trim() : ""} ${ingredient.trim()}`);
    }
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <button
          type="button"
          className="modal__close-button"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          &times;
        </button>

        <div className="modal__header">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="modal__image"
            loading="lazy"
          />
          <div className="modal__info">
            <span className="modal__category">
              {meal.strCategory} • {meal.strArea}
            </span>
            <h2 className="modal__title">{meal.strMeal}</h2>
          </div>
        </div>

        <div className="modal__body">
          <div className="modal__section">
            <h3 className="modal__section-title">Ingredientes</h3>
            <ul className="modal__list">
              {ingredients.map((item, index) => (
                <li key={index} className="modal__list-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="modal__section">
            <h3 className="modal__section-title">Instrucciones</h3>
            <p className="modal__instructions">{meal.strInstructions}</p>
          </div>

          {meal.strYoutube && (
            <div className="modal__section">
              <a
                href={meal.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="modal__video-link"
              >
                Ver tutorial en YouTube &rarr;
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecipeModal;

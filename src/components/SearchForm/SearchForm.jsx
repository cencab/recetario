import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      onSearch(keyword.trim());
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label
        htmlFor="recipe-search"
        style={{ position: "absolute", left: "-9999px" }}
      >
        Buscar receta por ingrediente o plato
      </label>
      <input
        type="text"
        className="search-form__input"
        placeholder="Introduce un ingrediente o plato en inglés (ej. Chicken, Pasta)"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        required
      />
      <button type="submit" className="search-form__button">
        Buscar
      </button>
    </form>
  );
}

export default SearchForm;

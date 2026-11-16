import { useState } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import RecipeModal from "./components/RecipeModal/RecipeModal";
import Footer from "./components/Footer/Footer";
import { searchMeals } from "./utils/TheMealDBApi";
import { SEARCH_ERROR_MESSAGE } from "./utils/constants";
import "./App.css";

function App() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedMeal, setSelectedMeal] = useState(null);

  const handleSearch = (keyword) => {
    setIsLoading(true);
    setErrorMessage("");
    setHasSearched(true);

    searchMeals(keyword)
      .then((data) => {
        setMeals(data.meals || []);
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage(SEARCH_ERROR_MESSAGE);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleCardClick = (meal) => {
    setSelectedMeal(meal);
  };

  const handleCloseModal = () => {
    setSelectedMeal(null);
  };

  return (
    <HashRouter>
      <div className="page">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/search"
            element={
              <Search
                onSearch={handleSearch}
                meals={meals}
                isLoading={isLoading}
                hasSearched={hasSearched}
                errorMessage={errorMessage}
                onCardClick={handleCardClick}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />

        {selectedMeal && (
          <RecipeModal meal={selectedMeal} onClose={handleCloseModal} />
        )}
      </div>
    </HashRouter>
  );
}

export default App;

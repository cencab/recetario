const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const searchMeals = (query) => {
  return fetch(`${BASE_URL}/search.php?s=${encodeURIComponent(query)}`).then(
    checkResponse,
  );
};

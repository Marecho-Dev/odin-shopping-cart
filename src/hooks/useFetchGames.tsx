import { useState, useEffect } from "react";

export function useFetchGames() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiKey = import.meta.env.VITE_MY_API_KEY.trim();
  console.log(apiKey);
  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        const gamePromises = data.results.map((game) => {
          return fetch(
            `https://api.rawg.io/api/games/${game.id}?key=${apiKey}`
          ).then((res) => res.json());
        });

        return Promise.all(gamePromises);
      })
      .then((detailedGameData) => {
        setData(detailedGameData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);
  console.log(data);
  return { data, error, loading };
}

export default useFetchGames;

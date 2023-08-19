import { useState, useEffect } from "react";

export function useFetchGameDetails() {
  const [gamesData, setGamesData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiKey = import.meta.env.VITE_MY_API_KEY.trim();

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        setGamesData(data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);
  return { gamesData, error, loading };
}

export default useFetchGameDetails;

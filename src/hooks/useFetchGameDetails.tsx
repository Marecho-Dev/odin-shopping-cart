import { useState, useEffect } from "react";

export function useFetchGameDetails(id: any) {
  const [gamesData, setGamesData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiKey = import.meta.env.VITE_MY_API_KEY.trim();

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games/${id}?key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setGamesData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);
  console.log(gamesData);
  return { gamesData, error, loading };
}

export default useFetchGameDetails;

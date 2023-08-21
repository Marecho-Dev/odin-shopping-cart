import { useState, useEffect } from "react";

interface GameDetails {
  id: number;
  name: string;
  description_raw: string;
  // ... and any other properties you expect to get
}

export function useFetchGameDetails(id: number) {
  const [gamesData, setGamesData] = useState<GameDetails | null>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiKey = import.meta.env.VITE_MY_API_KEY.trim();

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games/${id}?key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        setGamesData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [apiKey, id]);

  return { gamesData, error, loading };
}

export default useFetchGameDetails;

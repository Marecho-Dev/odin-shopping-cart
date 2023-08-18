import { useState, useEffect } from "react";

export function useFetchGames() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiKey = import.meta.env.VITE_MY_API_KEY.trim();
  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        console.log(data.results);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  console.log(data);
  return { data, error, loading };
}

export default useFetchGames;

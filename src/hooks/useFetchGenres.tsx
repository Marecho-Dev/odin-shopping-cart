import { useState, useEffect } from "react";

export function useFetchGenres() {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiKey = import.meta.env.VITE_MY_API_KEY.trim();

  useEffect(() => {
    fetch(`https://api.rawg.io/api/genres?key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        setGenres(data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);
  return { genres, error, loading };
}

export default useFetchGenres;

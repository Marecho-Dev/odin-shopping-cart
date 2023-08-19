import { useState, useEffect } from "react";

export function useFetchGenres(data) {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiKey = import.meta.env.VITE_MY_API_KEY.trim();

  useEffect(() => {
    const gamePromises = data.results.map((game) => {
      return fetch(
        `https://api.rawg.io/api/genres/${game.id}?key=${apiKey}`
      ).then((response) => response.json());
    });

    Promise.all(gamePromises)
      .then((allGenres) => {
        // Flatten the array and filter out duplicates
        const uniqueGenres = Array.from(
          new Set(
            allGenres.flatMap((game) => game.genres).map((genre) => genre.id)
          )
        ).map((id) =>
          allGenres
            .find((game) => game.genres.some((g) => g.id === id))
            .genres.find((g) => g.id === id)
        );

        setGenres(uniqueGenres);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [data]);
  console.log(data);
  return { genres, error, loading };
}

export default useFetchGenres;

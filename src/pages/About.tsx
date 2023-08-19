import { Text } from "@mantine/core";
import useFetchGenres from "../hooks/useFetchGenres";
export function About() {
  const { genres, error, loading } = useFetchGenres();
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;
  return (
    <>
      <Text>About</Text>
      <div>
        {genres.map((genre, index) => (
          <div style={{ color: "white" }} key={genre.id}>
            {genre.name}
          </div>
        ))}
      </div>
    </>
  );
}

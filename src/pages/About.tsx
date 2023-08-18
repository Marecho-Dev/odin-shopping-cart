import { Text } from "@mantine/core";
import useFetchGames from "../hooks/useFetchGames";
export function About() {
  const { data, error, loading } = useFetchGames();

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;
  return (
    <>
      <Text>About</Text>
      <div>
        {data.map((game, index) => (
          <div style={{ color: "white" }} key={game.id}>
            {game.name} | {game.added_by_status.owned}
          </div>
        ))}
      </div>
    </>
  );
}

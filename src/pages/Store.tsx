import { Button, Grid, Text } from "@mantine/core";
import { GameCard } from "../components/GameCard";
import { useGames } from "../context/gameContext";
import { useGenres } from "../context/genresContext";
export function Store() {
  const {
    data: gamesData,
    error: gamesError,
    loading: gamesLoading,
  } = useGames();
  const {
    genres: genresData,
    error: genresError,
    loading: genresLoading,
  } = useGenres();

  if (gamesLoading && genresLoading) {
    return <div style={{ color: "white" }}>Loading...</div>; // or <Spinner />
  }

  if (gamesError || genresError) {
    return <div style={{ color: "white" }}>Error: {gamesError.message}</div>;
  }
  return (
    <>
      <Grid
        gutter={5}
        gutterXs="md"
        gutterMd="xl"
        gutterXl={50}
        style={{ margin: 20 }}
      >
        {gamesData.map((game, index) => (
          <Grid.Col xs={12} md={4} sm={6} lg={3} key={game.id}>
            <GameCard
              id={game.id}
              title={game.name}
              description={""}
              imageUrl={game.background_image}
            ></GameCard>
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
}

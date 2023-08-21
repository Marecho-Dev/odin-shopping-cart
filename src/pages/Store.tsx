import { Grid } from "@mantine/core";
import { GameCard } from "../components/GameCard";
import { useGames } from "../context/gameContext";
import { useGenres } from "../context/genresContext";
import { useEffect } from "react";
export function Store() {
  const {
    data: gamesData,
    error: gamesError,
    loading: gamesLoading,
  } = useGames();
  const { error: genresError, loading: genresLoading } = useGenres();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (gamesLoading && genresLoading) {
    return <div style={{ color: "white" }}>Loading...</div>; // or <Spinner />
  }

  if (gamesError || genresError) {
    return <div style={{ color: "white" }}>Error: {gamesError?.message}</div>;
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
        {gamesData?.map((game) => (
          <Grid.Col xs={12} md={4} sm={6} lg={3} key={game.id}>
            <GameCard
              id={game.id}
              title={game.name}
              description_raw={""}
              imageUrl={game.background_image}
            ></GameCard>
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
}

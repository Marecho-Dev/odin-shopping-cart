import { Grid, Text } from "@mantine/core";
import { HeroImageRight } from "../components/HeroImageRight";
import { Carousel } from "@mantine/carousel";
import { NetflixCarousel } from "../components/NetflixCarousel";
import "../pages/Home.css";
import { GameCard } from "../components/GameCard";
import useFetchGames from "../hooks/useFetchGames";
import useFetchGenres from "../hooks/useFetchGenres";
export function Home() {
  const {
    data: gamesData,
    error: gamesError,
    loading: gamesLoading,
  } = useFetchGames();
  const {
    genres: genresData,
    error: genresError,
    loading: genresLoading,
  } = useFetchGenres();
  //   const {
  //     genres: detailsData,
  //     error: detailsError,
  //     loading: detailsLoading,
  //   } = useFetchGameDetails();

  if (gamesLoading) {
    return <div style={{ color: "white" }}>Loading...</div>; // or <Spinner />
  }

  if (gamesError) {
    return <div style={{ color: "white" }}>Error: {gamesError.message}</div>;
  }

  return (
    <>
      <Carousel
        withIndicators
        slideSize="100%"
        slideGap="md"
        loop
        align="start"
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
      >
        {gamesData.slice(0, 5).map((game, index) => (
          <Carousel.Slide>
            <HeroImageRight
              title={game.name}
              description={""}
              imageUrl={game.background_image}
            ></HeroImageRight>
          </Carousel.Slide>
        ))}
      </Carousel>
      <Text
        fw={100}
        variant="gradient"
        sx={{ fontSize: "3rem" }}
        gradient={{ from: "white", to: "white" }}
        style={{ margin: 50 }}
      >
        Browse By Categories
      </Text>
      <NetflixCarousel data={genresData}></NetflixCarousel>
      <Text
        fw={100}
        variant="gradient"
        sx={{ fontSize: "3rem" }}
        gradient={{ from: "white", to: "white" }}
        style={{ margin: 50 }}
      >
        Popular
      </Text>
      <Grid
        gutter={5}
        gutterXs="md"
        gutterMd="xl"
        gutterXl={50}
        style={{ margin: 20 }}
      >
        {gamesData.map((game, index) => (
          <Grid.Col xs={12} md={4} lg={3}>
            <GameCard
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

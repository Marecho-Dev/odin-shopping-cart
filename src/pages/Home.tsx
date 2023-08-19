import { Grid, Text } from "@mantine/core";
import { HeroImageRight } from "../components/HeroImageRight";
import { Carousel } from "@mantine/carousel";
import { NetflixCarousel } from "../components/NetflixCarousel";
import "../pages/Home.css";
import { GameCard } from "../components/GameCard";
import useFetchGames from "../hooks/useFetchGames";
export function Home() {
  const { data, error, loading } = useFetchGames();

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;
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
        {data.slice(0, 5).map((game, index) => (
          <Carousel.Slide>
            <HeroImageRight
              title={game.name}
              //   description={"test"}
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
      <NetflixCarousel></NetflixCarousel>
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
        <Grid.Col xs={12} md={4} lg={3}>
          <GameCard></GameCard>
        </Grid.Col>
        <Grid.Col xs={12} md={4} lg={3}>
          <GameCard></GameCard>
        </Grid.Col>
        <Grid.Col xs={12} md={4} lg={3}>
          <GameCard></GameCard>
        </Grid.Col>
        <Grid.Col xs={12} md={4} lg={3}>
          <GameCard></GameCard>
        </Grid.Col>
        <Grid.Col xs={12} md={4} lg={3}>
          <GameCard></GameCard>
        </Grid.Col>
        <Grid.Col xs={12} md={4} lg={3}>
          <GameCard></GameCard>
        </Grid.Col>
        <Grid.Col xs={12} md={4} lg={3}>
          <GameCard></GameCard>
        </Grid.Col>
        <Grid.Col xs={12} md={4} lg={3}>
          <GameCard></GameCard>
        </Grid.Col>
        <Grid.Col xs={12} md={4} lg={3}>
          <GameCard></GameCard>
        </Grid.Col>
        <Grid.Col xs={12} md={4} lg={3}>
          <GameCard></GameCard>
        </Grid.Col>
      </Grid>
    </>
  );
}

import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { createStyles, Paper, Text, useMantineTheme, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(250),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  title: {
    fontFamily: `${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 1,
    fontWeight: 700,
    textTransform: "uppercase",
    backgroundColor: "rgba(0, 0, 0, 0.8)", // add this line
    padding: theme.spacing.xs, // for a bit of space around the text
    borderRadius: rem(4), // optional, for rounded edges
  },
}));

interface CardProps {
  image: string;
  category: string;
}

interface NetflixCarouselProps {
  data: {
    image_background: string;
    name: string;
  }[];
}

function Card({ image, category }: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
      </div>
    </Paper>
  );
}

export function NetflixCarousel({ data }: NetflixCarouselProps) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.name}>
      <Card image={item.image_background} category={item.name} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      loop
      dragFree
      slideSize="25%"
      breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: rem(2) }]}
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 1 : 2}
      style={{ marginLeft: "50px", marginRight: "50px" }}
    >
      {slides}
    </Carousel>
  );
}

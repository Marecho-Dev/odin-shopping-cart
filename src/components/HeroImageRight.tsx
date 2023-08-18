import {
  createStyles,
  Container,
  Title,
  Text,
  Button,
  rem,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    height: "80vh",
    backgroundColor: "#11284b",
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingTop: `calc(${theme.spacing.xl} * 3)`,
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
    },
  },

  image: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  content: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(48),

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: rem(500),
    fontFamily: `${theme.fontFamily}`,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
    },
  },

  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    fontFamily: `${theme.fontFamily}`,
    fontSize: rem(22),

    [theme.fn.smallerThan("md")]: {
      width: "100%",
    },
  },
}));

export function HeroImageRight({ title, description, imageUrl }) {
  const { classes } = useStyles();

  const dynamicStyles = {
    backgroundImage: `linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #020617 70%), url(${imageUrl})`,
  };
  return (
    <div className={classes.root} style={dynamicStyles}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "white", to: "white" }}
              >
                {title}
              </Text>{" "}
            </Title>

            <Text className={classes.description} mt={30} lineClamp={10}>
              {description}
            </Text>

            <Button
              uppercase
              variant="white"
              // gradient={{from:"white",to:"white"}}
              size="xl"
              radius="xs"
              fw={700}
              w={100}
              style={{
                color: "black",
                paddingLeft: 5,
                paddingRight: 5,
                paddingTop: 5,
                paddingBottom: 5,
              }}
              className={classes.control}
              mt={40}
              compact
            >
              SHOP
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

import {
  createStyles,
  Header,
  Autocomplete,
  Group,
  Burger,
  rem,
  Button,
  Flex,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import { MantineLogo } from "@mantine/ds";
import { useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    backgroundColor: "#1e293b",
    border: "none",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },

  inner: {
    height: rem(56),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  search: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
      color: "black",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: "white",
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}));

interface HeaderSearchProps {
  links: { link: string; label: string }[];
}

export function HeaderSimple({ links }: HeaderSearchProps) {
  const { openCart, cartQuantity } = useShoppingCart();
  console.log(cartQuantity);
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    setTimeout(() => {
      setIsClicked(false);
    }, 100); // 1000 milliseconds = 1 second
  };
  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={60} className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" />
          <MantineLogo size={28} />
        </Group>

        <Group>
          <Group ml={50} spacing={5} className={classes.links}>
            {items}
          </Group>
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            icon={<IconSearch size="1rem" stroke={1.5} />}
            data={[
              "React",
              "Angular",
              "Vue",
              "Next.js",
              "Riot.js",
              "Svelte",
              "Blitz.js",
            ]}
          />
          <button
            onClick={handleClick}
            style={{
              backgroundColor: isClicked ? "#f0f0f0" : "white",
              width: "3rem",
              height: "3rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "25px",
              position: "relative",
              border: "none",
              outline: "none",
              boxShadow: isClicked ? "inset 0 0 5px rgba(0,0,0,0.3)" : "none",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="currentColor"
            >
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
            </svg>
            <div
              style={{
                borderRadius: "25px",
                backgroundColor: "#ef4444",
                display: "flex",
                color: "white",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "15px",
                padding: "10px",
                height: "1.5rem",
                width: "1.5rem",
                position: "absolute",
                bottom: "0",
                right: "0",
                transform: "translate(25%,25%)",
              }}
            >
              {cartQuantity}
            </div>
          </button>
        </Group>
      </div>
    </Header>
  );
}

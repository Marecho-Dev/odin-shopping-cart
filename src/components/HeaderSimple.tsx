import {
  createStyles,
  Header,
  Autocomplete,
  Group,
  Burger,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import { MantineLogo } from "@mantine/ds";
import { useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { CartDrawer } from "./CartDrawer";
import { NavLink } from "react-router-dom";

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

  linkActive: {
    // your styles for the active link
    fontWeight: "bold", // example style for active link
    color:
      theme.colorScheme === "light"
        ? theme.colors.gray[0]
        : theme.colors.dark[6],
    // ^ This is just an example, adjust based on your desired look for active links
  },
}));

interface HeaderSearchProps {
  links: { link: string; label: string }[];
}

export function HeaderSimple({ links }: HeaderSearchProps) {
  const { cartQuantity } = useShoppingCart();
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();
  const [isClicked, setIsClicked] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const getLinkClass = ({
    isActive,
    isPending,
  }: {
    isActive: boolean;
    isPending: boolean;
  }) => {
    if (isPending) return "pending";
    if (isActive) return cx(classes.linkActive);
    return cx(classes.link);
  };

  const handleClick = () => {
    setCartOpen(!cartOpen);
  };
  const items = links.map((link) => (
    <NavLink
      key={link.label}
      to={link.link}
      className={getLinkClass}
      onClick={(event) => {
        setActive(link.link);
      }}
    >
      {link.label}
    </NavLink>
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
            <ShoppingCartIcon style={{ width: "1.5rem", height: "1.5rem" }} />
            {cartQuantity !== 0 && (
              <div
                style={{
                  borderRadius: "25px",
                  backgroundColor: "#ef4444",
                  display: "flex",
                  color: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: ".75rem",
                  paddingTop: "3px",
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
            )}
          </button>
        </Group>
      </div>
      {cartOpen && (
        <CartDrawer
          onOpen={cartOpen}
          onClose={() => setCartOpen(false)}
        ></CartDrawer>
      )}
    </Header>
  );
}

import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function GameCard({ id, title, description, imageUrl }) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const itemQuantity = getItemQuantity(id);
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder key={title}>
      <Card.Section>
        <Image
          src={imageUrl}
          height={200}
          alt={title}
          style={{ objectFit: "cover" }}
        />
        <Badge
          color="pink"
          variant="light"
          style={{ position: "absolute", top: "10px", right: "10px" }}
        >
          On Sale
        </Badge>
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{title}</Text>
      </Group>

      <Text size="sm" color="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway
      </Text>
      <center>
        {itemQuantity != 0 && (
          <Button
            onClick={() => decreaseCartQuantity(id)}
            variant="light"
            color="indigo"
            mr="xs"
            mt="md"
            radius="xs"
          >
            -
          </Button>
        )}
        <Button
          onClick={() => increaseCartQuantity(id)}
          variant="light"
          color="indigo"
          mt="md"
          radius="xs"
          disabled={itemQuantity > 0}
        >
          {itemQuantity > 0 ? itemQuantity : "ADD TO CART"}
        </Button>
        {itemQuantity != 0 && (
          <Button
            onClick={() => increaseCartQuantity(id)}
            variant="light"
            color="indigo"
            ml="xs"
            mt="md"
            radius="xs"
          >
            +
          </Button>
        )}
      </center>
    </Card>
  );
}

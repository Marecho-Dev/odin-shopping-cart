import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { TrashIcon } from "@heroicons/react/24/outline";
import useFetchGameDetails from "../hooks/useFetchGameDetails";


type GameCardProps = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};



export function GameCard({ id, title, description, imageUrl }: GameCardProps) {
  const { gamesData, error, loading } = useFetchGameDetails(id);

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
          color="green"
          variant="light"
          style={{ position: "absolute", top: "10px", right: "10px" }}
        >
          $49.99
        </Badge>
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{title}</Text>
      </Group>

      <Text size="sm" color="dimmed" lineClamp={4}>
        {gamesData.description_raw};
      </Text>
      <Text size="xs" color="#007BFF" lineClamp={4}>
        [SHOW MORE]
      </Text>
      <center>
        <div style={{ position: "relative" }}>
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
          {itemQuantity != 0 && (
            <Button
              onClick={() => removeFromCart(id)}
              style={{ position: "absolute" }}
              variant="light"
              color="red"
              ml="xs"
              mt="md"
              radius="xs"
            >
              <TrashIcon style={{ width: "1rem", height: "1rem" }} />
            </Button>
          )}
        </div>
      </center>
    </Card>
  );
}

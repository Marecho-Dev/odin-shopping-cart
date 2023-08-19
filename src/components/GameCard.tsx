import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

export function GameCard({ title, description, imageUrl }) {
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
        <Button variant="light" color="indigo" mr="xs" mt="md" radius="xs">
          -
        </Button>
        <Button variant="light" color="indigo" mt="md" radius="xs">
          ADD TO CART
        </Button>
        <Button variant="light" color="indigo" ml="xs" mt="md" radius="xs">
          +
        </Button>
      </center>
    </Card>
  );
}

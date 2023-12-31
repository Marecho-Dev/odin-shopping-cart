import { Drawer, Table } from "@mantine/core";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Button } from "@mantine/core";
import { useGames } from "../context/gameContext";
import { Divider } from "@mantine/core";

export function CartDrawer({
  onOpen,
  onClose,
}: {
  onOpen: boolean;
  onClose: () => void;
}) {
  // const [{ open, close }] = useDisclosure(false);
  const { removeFromCart, cartItems, cartQuantity } = useShoppingCart();
  const { data: gamesData } = useGames();

  const gamesDictionary = gamesData?.reduce<{
    [key: number]: (typeof gamesData)[0];
  }>((acc, game) => {
    acc[game.id] = game;
    return acc;
  }, {});

  return (
    <>
      <Drawer
        opened={onOpen}
        position="right"
        onClose={onClose}
        title="Shopping Cart"
        transitionProps={{
          transition: "rotate-left",
          duration: 150,
          timingFunction: "linear",
        }}
        style={{ zIndex: "1010", position: "relative" }}
      >
        <Table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((game, index) => (
              <>
                {/* <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "10px",
                    gap: "10px",
                    width: "100%",
                    position: "relative",
                  }}
                > */}
                <tr key={index}>
                  <th>{gamesDictionary?.[game.id]?.name}</th>
                  <th>{game.quantity}</th>
                  <th>${game.quantity * 59.99}</th>
                  <th>
                    <Button
                      onClick={() => removeFromCart(game.id)}
                      variant="light"
                      color="red"
                      radius="xs"
                    >
                      <TrashIcon style={{ width: "1rem", height: "1rem" }} />
                    </Button>
                  </th>
                </tr>
                {/* </div> */}
              </>
            ))}
          </tbody>
        </Table>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginTop: "10px",
            position: "absolute",
            right: "30px",
          }}
        >
          <Divider size={"xs"} mt={10} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", gap: "1rem" }}>
              <div style={{ width: "6rem" }}>Discount:</div>
              <div>$0</div>
            </div>
            <div
              style={{
                display: "flex",
                gap: "1rem",
              }}
            >
              <div style={{ width: "6rem" }}>Total: </div>
              <div>${cartQuantity * 59.99}</div>
            </div>
          </div>

          <div style={{ alignSelf: "flex-end", marginTop: "10px" }}>
            <Button>Checkout</Button>
          </div>
        </div>
      </Drawer>
    </>
  );
}

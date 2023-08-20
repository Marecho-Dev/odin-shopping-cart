import { Drawer } from "@mantine/core";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Button } from "@mantine/core";
export function CartDrawer({ onOpen, onClose }) {
  // const [{ open, close }] = useDisclosure(false);
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    cartItems,
  } = useShoppingCart();

  console.log(cartItems);
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
        {cartItems.map((game, index) => (
          <>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
                gap: "10px",
                width: "100%",
              }}
            >
              <div>{game.id}</div>
              <div>-</div>
              <div>{game.quantity}</div>
              <div>-</div>
              <div>${game.quantity * 59.99}</div>
              <Button
                onClick={() => removeFromCart(game.id)}
                variant="light"
                color="red"
                radius="xs"
              >
                <TrashIcon style={{ width: "1rem", height: "1rem" }} />
              </Button>
            </div>
          </>
        ))}
      </Drawer>
    </>
  );
}

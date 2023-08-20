import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button, Group } from "@mantine/core";

export function CartDrawer({ onOpen, onClose }) {
  // const [{ open, close }] = useDisclosure(false);

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
      ></Drawer>
    </>
  );
}

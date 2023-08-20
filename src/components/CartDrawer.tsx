import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, Group } from '@mantine/core';

export function CartDrawer() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        position='right'
        onClose={close}
        title="Authentication"
        transitionProps={{ transition: 'rotate-left', duration: 150, timingFunction: 'linear' }}
      >
        {/* Drawer content */}
      </Drawer>

      <Group position="center">
        <Button onClick={open}>Open Drawer</Button>
      </Group>
    </>
  );
}
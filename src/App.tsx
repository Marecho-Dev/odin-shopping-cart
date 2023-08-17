import { MantineProvider, Text } from "@mantine/core";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MantineProvider>
  );
}

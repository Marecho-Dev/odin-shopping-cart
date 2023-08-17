import { MantineProvider } from "@mantine/core";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { HeaderSimple } from "./components/HeaderSimple";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <HeaderSimple
        links={[
          { link: "http://localhost:5175/", label: "Home" },
          { link: "http://localhost:5175/Store", label: "Store" },
          { link: "http://localhost:5175/About", label: "About" },
        ]}
      ></HeaderSimple>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </MantineProvider>
  );
}

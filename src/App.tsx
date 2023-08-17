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
          { link: "http://127.0.0.1:5173/", label: "Home" },
          { link: "http://127.0.0.1:5173/store", label: "Store" },
          { link: "http://127.0.0.1:5173/about", label: "About" },
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

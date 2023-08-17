import { MantineProvider } from "@mantine/core";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { HeaderSimple } from "./components/HeaderSimple";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div style={{ backgroundColor: "#020617", minHeight: "100vh" }}>
        <HeaderSimple
          links={[
            { link: "/", label: "Home" },
            { link: "/Store", label: "Store" },
            { link: "/About", label: "About" },
          ]}
        ></HeaderSimple>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </MantineProvider>
  );
}

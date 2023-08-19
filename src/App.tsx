import { MantineProvider } from "@mantine/core";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { HeaderSimple } from "./components/HeaderSimple";
import "./App.css";
import { GamesProvider } from "./context/gameContext";
import { GenresProvider } from "./context/genresContext";
import { useEffect } from "react";
export default function App() {
  useEffect(() => {
    console.log("App mounted");
    return () => {
      console.log("App unmounted");
    };
  }, []);
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        breakpoints: {
          xs: "30em",
          sm: "48em",
          md: "64em",
          lg: "74em",
          xl: "90em",
          xxl: "120em",
        },
      }}
    >
      <div style={{ backgroundColor: "#020617", minHeight: "100vh" }}>
        <HeaderSimple
          links={[
            { link: "/", label: "Home" },
            { link: "/Store", label: "Store" },
            { link: "/About", label: "About" },
          ]}
        ></HeaderSimple>
        <GamesProvider>
          <GenresProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/store" element={<Store />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </GenresProvider>
        </GamesProvider>
      </div>
    </MantineProvider>
  );
}

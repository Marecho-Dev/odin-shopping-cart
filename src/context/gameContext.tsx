import { ReactNode, createContext, useContext } from "react";
import useFetchGames from "../hooks/useFetchGames";

type GamesProviderProps = {
  children: ReactNode;
};

type Game = {
  id: number;
  name: string;
  background_image: string;

  // ... other properties
};

type GamesResponse = Game[];

type GamesContextType = {
  data: GamesResponse | null;
  loading: boolean;
  error: Error | null;
};

const GamesContext = createContext<GamesContextType | undefined>(undefined);

export function useGames() {
  const context = useContext(GamesContext);
  if (!context) {
    throw new Error("useGames must be used within an GamesProvider");
  }

  return context;
}

export function GamesProvider({ children }: GamesProviderProps) {
  const { data, loading, error } = useFetchGames();
  return (
    <GamesContext.Provider value={{ data, loading, error }}>
      {children}
    </GamesContext.Provider>
  );
}

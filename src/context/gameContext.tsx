import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import useFetchGames from "../hooks/useFetchGames";

type GamesProviderProps = {
  children: ReactNode;
};

type GamesContextType = {
  data: any;
  loading: boolean;
  error: any;
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

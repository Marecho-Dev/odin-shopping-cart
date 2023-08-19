import { ReactNode, createContext, useContext } from "react";
import useFetchGenres from "../hooks/useFetchGenres";

type GenresProviderProps = {
  children: ReactNode;
};

type GenresContextType = {
  data: any;
  loading: boolean;
  error: any;
};

const GenresContext = createContext<GenresContextType | undefined>(undefined);

export function useGenres() {
  const context = useContext(GenresContext);
  if (!context) {
    throw new Error("useGames must be used within an GamesProvider");
  }

  return context;
}

export function GamesProvider({ children }: GenresProviderProps) {
  const { data, loading, error } = useFetchGenres();
  return (
    <GenresContext.Provider value={{ data, loading, error }}>
      {children}
    </GenresContext.Provider>
  );
}

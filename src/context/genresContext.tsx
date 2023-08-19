import { ReactNode, createContext, useContext } from "react";
import useFetchGenres from "../hooks/useFetchGenres";

type GenresProviderProps = {
  children: ReactNode;
};

type GenresContextType = {
  genres: any;
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

export function GenresProvider({ children }: GenresProviderProps) {
  const { genres, loading, error } = useFetchGenres();
  return (
    <GenresContext.Provider value={{ genres, loading, error }}>
      {children}
    </GenresContext.Provider>
  );
}

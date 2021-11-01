import React, {
  useState, createContext, ReactNode, useMemo,
} from 'react';
import { PaymentProcesses } from '../general/types';
import { Show } from '../types';

type ContextType = {
  favourites: Show[],
  setFavourites: (pm: Show) => void,
}

const FavouritesContext = createContext<ContextType>({
  favourites: [],
  setFavourites: () => {},
});

interface ProviderProps {
  children: ReactNode;
}

export const FavouritesContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const [favourites, setFavourites] = useState<PaymentProcesses>([]);

  const state = useMemo(() => ({
    favourites, setFavourites,
  }), [favourites, setFavourites]);

  return (
    <FavouritesContext.Provider value={state}>
      { children }
    </FavouritesContext.Provider>
  );
};

export default FavouritesContext;

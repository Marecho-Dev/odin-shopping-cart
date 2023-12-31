import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type ShoppingCartContext = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  setCartQuantity: (_id: number, _quantity: number) => void;
  removeFromCart: (id: number) => void;
  cartItems: CartItem[];
  cartQuantity: number;
};

const defaultShoppingCartValue: ShoppingCartContext = {
  openCart: () => {},
  closeCart: () => {},
  getItemQuantity: () => 0,
  increaseCartQuantity: () => {},
  decreaseCartQuantity: () => {},
  setCartQuantity: () => {},
  removeFromCart: () => {},
  cartItems: [],
  cartQuantity: 0,
};

type CartItem = {
  id: number;
  quantity: number;
};

const ShoppingCartContext = createContext<ShoppingCartContext>(
  defaultShoppingCartValue
);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  console.log("ShoppingCartProvider mounted");
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const cartQuantity = cartItems.reduce(
    (quantity, items) => items.quantity + quantity,
    0
  );
  useEffect(() => {}, [cartItems, cartQuantity]);
  const openCart = () => setIsOpen(isOpen);
  const closeCart = () => setIsOpen(!isOpen);
  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }
  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }
  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function setCartQuantity(id: number, quantity: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: quantity };
          } else {
            return item;
          }
        });
      }
    });
  }
  return (
    <ShoppingCartContext.Provider
      value={{
        setCartQuantity,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

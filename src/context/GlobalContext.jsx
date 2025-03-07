import { Children, createContext, useEffect, useReducer } from "react";

export const GlobalContext = createContext();

const initialState = {
  products: [],
  totalAmount: 0,
  totalPrice: 0,
};

const chageState = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, payload],
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter((p) => payload != p.id),
      };
  }
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(chageState, initialState);

  const calculateTotal = () => {};

  useEffect(() => {
    // Narx bor
  }, [state.products]);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

import { createContext, useContext, useReducer } from "react";

const filterContext = createContext();

export const filter = (action, state) => {
  switch (action.type) {
    case "SORT":
      return {
        sortBy: action.payload,
      };

    case "GENDER":
      return {
        gender: action.payload,
      };

    case "CATEGORY":
      return {
        category: action.payload,
      };

    default:
      return state;
  }
};

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filter, {
    sortBy: null,
    gender: null,
    category: null,
  });
  return (
    <filterContext.Provider value={{ state, dispatch }}>
      {children}
    </filterContext.Provider>
  );
};

const useFilter = () => useContext(filterContext);

export { FilterProvider, useFilter };

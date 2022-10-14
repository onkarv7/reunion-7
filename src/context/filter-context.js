import { createContext, useContext, useReducer } from "react";
import { filterReducer, filterInitialState } from "../reducers/filterReducer";
const FilterContext = createContext(null);

export const FilterProvider = ({ children }) => {
  const [filterState, dispatchFilter] = useReducer(
    filterReducer,
    filterInitialState
  );
  return (
    <FilterContext.Provider value={{ filterState, dispatchFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);

import { getTodaysDate } from "../utilities/getTodaysDate";
export const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case "FILTER-SUBMIT":
      return {
        ...state,
        location: payload.location,
        startDate: payload.startDate,
        priceRange: payload.priceRange,
        propertyType: payload.propertyType,
      };
    default:
      return state;
  }
};

export const filterInitialState = {
  location: "all",
  startDate: getTodaysDate("slashFormat"),
  priceRange: "all",
  propertyType: "all",
};

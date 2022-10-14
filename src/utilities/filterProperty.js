export const filterProperty = (state, propertyList) => {
  if (state.location !== "all") {
    propertyList = propertyList.filter(
      (property) => property.city === state.location
    );
  }
  if (state.propertyType !== "all") {
    propertyList = propertyList.filter(
      (property) => property.type === state.propertyType
    );
  }

  if (state.priceRange !== "all") {
    if (state.priceRange === "<10k") {
      propertyList = propertyList.filter((property) => property.rent < 10000);
    } else if (state.priceRange === ">110k") {
      propertyList = propertyList.filter((property) => property.rent > 110000);
    } else {
      const minValue = parseInt(
        state.priceRange.split("-")[0].replace("k", "000")
      );
      const maxValue = parseInt(
        state.priceRange.split("-")[1].replace("k", "000")
      );

      propertyList = propertyList.filter(
        (property) => property.rent >= minValue && property.rent <= maxValue
      );
    }
  }
  if (state.startDate !== "") {
    const convertDate = (date) => {
      return new Date(date);
    };
    propertyList = propertyList.filter(
      (property) =>
        convertDate(state.startDate) >= convertDate(property.moveInDate)
    );
  }

  return propertyList;
};

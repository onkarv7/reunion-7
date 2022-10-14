export const searchProperty = (propertyList, searchQuery) => {
  if (searchQuery !== "") {
    propertyList = propertyList.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
        item.address.toLowerCase().includes(searchQuery.trim().toLowerCase())
    );
  }

  return propertyList;
};

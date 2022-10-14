import { useState } from "react";
import "./rentProperty.css";
import { PropertyCard } from "../components/PropertyCard";
import rentPropertyData from "../dummyData/rentPropertyData";
import { useFilter } from "../context/filter-context";
import { filterProperty } from "../utilities/filterProperty";
import { searchProperty } from "../utilities/searchProperty";
import { NavBar } from "../components/NavBar";
import { FiltersBar } from "../components/FiltersBar";

export const RentProperty = () => {
  const { filterState } = useFilter();

  const [searchQuery, setSearchQuery] = useState("");

  const filteredPropertyList = filterProperty(filterState, rentPropertyData);

  const searchedPropertyList = searchProperty(
    filteredPropertyList,
    searchQuery
  );
  return (
    <>
      <NavBar />
      <div className="rent-property-page">
        <div className="search-container">
          <h1>Search Properties for Rent</h1>
          <input
            className="search-property"
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search with Search Bar"
          />
        </div>

        <FiltersBar />
        <div className="property-list-container">
          {searchedPropertyList.length > 0 &&
            searchedPropertyList.map((property) => (
              <PropertyCard key={property.id} propertyDetails={property} />
            ))}
        </div>
        {searchedPropertyList.length === 0 && (
          <p className="empty-list text-center">No Results Found</p>
        )}
      </div>
    </>
  );
};

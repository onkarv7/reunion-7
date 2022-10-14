import { useRef } from "react";
import { useFilter } from "../context/filter-context";
import cities from "../dummyData/cities";
import { getTodaysDate } from "../utilities/getTodaysDate";

export const FiltersBar = () => {
  const filtersBarForm = useRef(null);
  const { dispatchFilter } = useFilter();
  const handleSearchBtn = (e) => {
    e.preventDefault();
    const form = filtersBarForm.current;
    const calendarDateArr = form["start-date"].value.split("-"); // (yyyy-mm-dd)
    const changedDateFormat = `${calendarDateArr[1]}/${calendarDateArr[2]}/${calendarDateArr[0]}`; // (mm/dd/yyyy)
    const payloadData = {
      location: form["cities"].value,
      startDate: changedDateFormat,
      priceRange: form["price"].value,
      propertyType: form["property-type"].value,
    };

    dispatchFilter({ type: "FILTER-SUBMIT", payload: payloadData });
  };
  return (
    <form
      ref={filtersBarForm}
      className="filters-bar"
      onSubmit={(e) => handleSearchBtn(e)}
    >
      <div className="dropdown-cities flex-column">
        <label htmlFor="cities">Location</label>
        <select name="cities" id="cities">
          {cities.map((city) => (
            <option key={city.value} value={city.value}>
              {city.displayName}
            </option>
          ))}
        </select>
      </div>
      <div className="start-date-select flex-column">
        <label htmlFor="start-date">When</label>
        <input
          type="date"
          id="start-date"
          name="start-date"
          defaultValue={getTodaysDate()}
        />
      </div>
      <div className="price-range flex-column">
        <label htmlFor="price">Price</label>
        <select name="price" id="price">
          <option value="all">All</option>
          <option value="<10k">Less than ₹10K</option>
          <option value="10k-30k">₹10K-₹30K</option>
          <option value="30k-50k">₹30K-₹50K</option>
          <option value="50k-70k">₹50K-₹70K</option>
          <option value="70k-90k">₹70K-₹90K</option>
          <option value="90k-110k">₹90K-₹110K</option>
          <option value=">110k">Greater than ₹110K</option>
        </select>
      </div>
      <div className="property-type flex-column">
        <label htmlFor="property-type">Property Type</label>
        <select name="property-type" id="property-type">
          <option value="all">All</option>
          <option value="apartment">Apartment</option>
          <option value="villa">Villa</option>
          <option value="studio">Studio</option>
        </select>
      </div>
      <div className="btn-search-submit">
        <button className="btn-search" type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

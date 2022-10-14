import "./propertyCard.css";

export const PropertyCard = ({ propertyDetails }) => {
  const {
    id,
    name,
    imgUrl,
    address,
    bedsQty,
    bathroomQty,
    propertyArea,
    rent,
    moveInDate,
    type,
    city
  } = propertyDetails;
 

  return (
    <div className="property-card">
      <div className="card-img-box">
        <img className="property-card-img" src={imgUrl} alt={name} />
      </div>

      <div className="card-body">
        <p className="property-rent">
          ₹{rent}
          <span className="gray-color">/month</span>
        </p>
        <p className="property-name">{city}</p>
        <p className="address">{address}</p>
       
      </div>
      <i
        className="material-icons"
        id="favorite-icon"
      >
      </i>
      <hr className="divider" />
      <div className="card-bottom flex-align-center gap-5px">
        <div className="beds flex-align-center">
          <i className="material-icons">bed</i>
          {bedsQty} Beds
        </div>
        <div className="bathrooms flex-align-center">
          <i className="material-icons">bathroom</i>
          {bathroomQty} Bathrooms
        </div>
        <div className="area flex-align-center">
          <i className="material-icons">square_foot</i>
          {propertyArea}
        </div>
      </div>
    </div>
  );
};

import "./navbar.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export const NavBar = () => {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <nav className="navbar flex">
      <div className="flex-align-center gap-1">
        <p className="brand-logo flex-align-center gap-5px">
          
          {/* reLoad page on logo  */}
          <i style={{cursor : 'pointer'}} onClick={() => window.location.reload(false)} className="material-icons">house</i>Estatery
        
        </p>
        <Link to="/" className={pathName === "/" ? `link active-link` : `link`}>
          Rent
        </Link>
        <Link
          to="/"
          className={pathName === "/Buy" ? `link active-link` : `link`}
        >
          Buy

        </Link>
        <Link to="/" className={pathName === "/Sell" ? `link active-link` : `link`}>
          Sell
        </Link>
        <Link to="/" className={pathName === "/Manage Property" ? `link active-link` : `link`}>
          Manage Property
        </Link>
        <Link to="/" className={pathName === "/Resources" ? `link active-link` : `link`}>
          Resources
        </Link>

      </div>
      <div className="auth-btns btn-grad flex">
        <p className="btn-login btn-grad">Login</p>
        <p className="btn-signup btn-grad">Signup</p>
      </div>
    </nav>
  );
};

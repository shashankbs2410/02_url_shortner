import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import classes from "./MainNavigation.module.css";
import Logout from "./Logout";

const Layout = () => {
  const isSignedIn = useSelector((state) => state.ui.isSignedIn);

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>Shortly</div>
      </Link>
      {isSignedIn && (
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : classes.nav
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact_us"
              className={({ isActive }) =>
                isActive ? classes.active : classes.nav
              }
            >
              Contact-Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/api"
              className={({ isActive }) =>
                isActive ? classes.active : classes.nav
              }
            >
              Api
            </NavLink>
          </li>
        </ul>
      )}
      <Logout />
    </header>
  );
};

export default Layout;

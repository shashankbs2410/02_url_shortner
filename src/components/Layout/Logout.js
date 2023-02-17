import { googleLogout } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { uiActions } from "../../store/ui-slice";
import classes from "./Logout.module.css";

const Logout = () => {
  const isSignedIn = useSelector((state) => state.ui.isSignedIn);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    googleLogout();
    dispatch(uiActions.toggleSignIn());
  };

  return (
    <div>
      {isSignedIn && (
        <Link to="/">
          <button className={classes.logout_button} onClick={logoutHandler}>
            <img
              className={classes.google_logo}
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
              }
              alt="Google logo"
            />
            Logout
          </button>
        </Link>
      )}
    </div>
  );
};

export default Logout;

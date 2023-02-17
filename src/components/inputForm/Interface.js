import { useDispatch, useSelector } from "react-redux";
import { fetchShortLink } from "../../store/links-slice";
import { uiActions } from "../../store/ui-slice";

import LoadingSpinner from "../UI/LoadingSpinner";
import Form from "./Form";
import classes from "./Interface.module.css";
import NoOutput from "./NoOutput";
import Output from "./Output";

const Interface = (props) => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.ui.error);
  const result = useSelector((state) => state.links.resultLinks);
  const isLoading = useSelector((state) => state.ui.loading);
  const isRequested = useSelector((state) => state.ui.shortLinkRequested);
  const allLinks = props.allLinks;

  const formSubmitHandler = (input) => {
    fetchShortLink(input, dispatch);
  };

  const viewAllLinksHandler = () => {
    dispatch(uiActions.toggleViewAllLinks());
  };

  return (
    <div className={classes.interface}>
      <Form formSubmitHandler={formSubmitHandler} />

      {result.length === 0 && !isLoading && <NoOutput />}

      {isLoading && (
        <div className={classes.loading}>
          <LoadingSpinner />
        </div>
      )}

      {error && <div className={classes.error}>{error}</div>}

      {!isLoading && !error && isRequested && <Output result={result} />}

      {allLinks.length > 0 && (
        <button
          className={classes.view_all_button}
          onClick={viewAllLinksHandler}
        >
          🡢 View all shortened links
        </button>
      )}
    </div>
  );
};

export default Interface;

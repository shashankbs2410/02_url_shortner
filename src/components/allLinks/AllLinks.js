import CopyToClipboard from "react-copy-to-clipboard";
import { useSelector, useDispatch } from "react-redux";
import { linksActions } from "../../store/links-slice";
import { uiActions } from "../../store/ui-slice";
import classes from "./AllLinks.module.css";

const AllLinks = () => {
  const dispatch = useDispatch();
  const allLinks = useSelector((state) => state.links.allLinks);

  const backClickHandler = () => {
    dispatch(uiActions.toggleViewAllLinks());
  };

  const clearClickHandler = () => {
    dispatch(uiActions.toggleViewAllLinks());
    dispatch(linksActions.clearAllLinks());
    dispatch(linksActions.clearResultLinks());
    dispatch(uiActions.shortLinkNotRequested());
  };

  return (
    <div className={classes.all_links}>
      <button
        onClick={backClickHandler}
        className={classes.back_button}
        title="Back to shorten a new link"
      >
        {"< Back"}
      </button>
      <button
        onClick={clearClickHandler}
        className={classes.back_button}
        title="Clear Saved Links"
      >
        Clear Saved Links
      </button>
      <h3 className={classes.label}>Previously Shortened Links by you:</h3>
      {allLinks.map((link) => {
        return (
          <div key={link.code} className={classes.links}>
            <p>
              Original Link:
              <CopyToClipboard text={link.original_link}>
                <button
                  title="Copy original link to Clipboard"
                  className={classes.copy_button}
                >
                  ⧉
                </button>
              </CopyToClipboard>
            </p>
            <p className={classes.link}>{link.original_link}</p>
            <p>
              Short Link:
              <CopyToClipboard text={link.original_link}>
                <button
                  title="Copy short link to Clipboard"
                  className={classes.copy_button}
                >
                  ⧉
                </button>
              </CopyToClipboard>
            </p>
            <p className={classes.link}>{link.short_link}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AllLinks;

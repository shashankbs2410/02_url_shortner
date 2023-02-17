import { CopyToClipboard } from "react-copy-to-clipboard";
import { useSelector } from "react-redux";

import classes from "./Output.module.css";

const Output = () => {
  const result = useSelector((state) => state.links.resultLinks);

  return (
    <div>
      <p className={classes.heading}>Short link: </p>
      <p className={classes.link}>
        {result.short_link}{" "}
        <CopyToClipboard text={result.short_link}>
          <button title="Copy to Clipboard" className={classes.copy_button}>
            Copy
          </button>
        </CopyToClipboard>
      </p>
      <p className={classes.heading}>Short link 2: </p>
      <p className={classes.link}>
        {result.short_link2}{" "}
        <CopyToClipboard text={result.short_link2}>
          <button title="Copy to Clipboard" className={classes.copy_button}>
            Copy
          </button>
        </CopyToClipboard>
      </p>
      <p className={classes.heading}>Share link: </p>
      <p className={classes.link}>
        {result.share_link}{" "}
        <CopyToClipboard text={result.share_link}>
          <button title="Copy to Clipboard" className={classes.copy_button}>
            Copy
          </button>
        </CopyToClipboard>
      </p>
    </div>
  );
};

export default Output;

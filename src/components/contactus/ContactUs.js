import { CopyToClipboard } from "react-copy-to-clipboard";

import classes from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className={classes.body}>
      <h3>Contact Us</h3>
      <p>For any Queries contact -</p>
      <p className={classes.name}>Shashanka B S</p>
      <p className={classes.email}>
        shashanka.sreedh@tigeranalytics.com{" "}
        <CopyToClipboard text="shashanka.sreedh@tigeranalytics.com">
          <button className={classes.copy_button} title="copy email address">
            ✉
          </button>
        </CopyToClipboard>
      </p>
    </div>
  );
};

export default ContactUs;

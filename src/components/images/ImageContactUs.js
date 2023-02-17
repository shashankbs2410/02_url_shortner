import contact_us from "./contact-us.png";
import classes from "./ImageContactUs.module.css";

const ImageContactUs = () => {
  return (
    <img src={contact_us} alt="Shorten the link" className={classes.image} />
  );
};

export default ImageContactUs;
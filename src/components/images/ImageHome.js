import short_link from "./short-link.png";
import classes from "./ImageHome.module.css";

const ImageHome = () => {
  return (
    <img src={short_link} alt="Shorten the link" className={classes.image} />
  );
};

export default ImageHome;

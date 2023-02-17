import classes from "./Api.module.css";

const ApiDetail = () => {
  return (
    <div className={classes.body}>
      <h2>shrtcode API</h2>
      <h3>Rate Limits</h3>
      <p>
        The number of request is limited to 1 requests per second, per IP
        address.
      </p>
      <h3>Terms of use</h3>
      <p>
        By using our API you agree to our{" "}
        <a href="https://shrtco.de/tos">terms of service</a>. The API is based
        on a fair-use policy.
      </p>
    </div>
  );
};

export default ApiDetail;

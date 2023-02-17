import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import classes from "./Form.module.css";

const Form = (props) => {
  const dispatch = useDispatch();
  const isEmpty = useSelector((state) => state.ui.isEmpty);
  const [input, setInput] = useState("");

  const clearHandler = (event) => {
    event.preventDefault();
    setInput("");
  };

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
    if (isEmpty) {
      dispatch(uiActions.toggleIsEmpty());
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.formSubmitHandler(input);
  };

  return (
    <div>
      <form>
        <label htmlFor="url" className={classes.label}>
          Enter Url to Shorten...
        </label>
        <input
          id="url"
          type="text"
          value={input}
          onChange={inputChangeHandler}
          className={classes.input}
        ></input>
        <button
          title="Clear input field"
          onClick={clearHandler}
          className={classes.clear_button}
        >
          clear
        </button>
        <button
          title="Submit link to shorten"
          onClick={formSubmitHandler}
          className={classes.submit_button}
        >
          Shorten Url!
        </button>
        {isEmpty && (
          <p className={classes.error}>Please enter non empty link!</p>
        )}
      </form>
    </div>
  );
};

export default Form;

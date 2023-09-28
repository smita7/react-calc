import { useState } from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./AddUser.module.css";
const AddUser = (props) => {
  const [userInput, setUserInput] = useState(null);

  let invalidInputStatement = "";
  const submitHandler = (event) => {
    event.preventDefault();

    console.log(userInput);
    if (!checkUserInputInvalid(userInput)) {
      console.log("this should not be printed");
      props.onUpdate(userInput);
    } else {
      console.log("this should be printed");
      props.invalidInput(true);
      props.invalidInputStatement(invalidInputStatement);
    }
  };

  const checkUserInputInvalid = (userInput) => {
    console.log("isInvalid funtion", userInput);
    if (!userInput) {
      invalidInputStatement = "Please enter a valid username and age (>0)";
      return true;
    } else if (!userInput.userName) {
      invalidInputStatement = "Please enter a valid username";
      return true;
    } else if (!userInput.age || parseInt(userInput.age, 10) < 0) {
      invalidInputStatement = "Please enter a valid age (>0)";
      return true;
    } else return false;
  };
  const changeHandler = (value, type) => {
    setUserInput((prevState) => ({ ...prevState, [type]: value }));
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label>Username</label>
        <input
          onChange={(event) => {
            changeHandler(event.target.value, "userName");
          }}
        ></input>
        <label>Age</label>
        <input
          onChange={(event) => {
            changeHandler(event.target.value, "age");
          }}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;

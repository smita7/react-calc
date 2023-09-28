import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div className={classes.backdrop}>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>Invalid Input</h2>
        </header>
        <div className={classes.content}>{props.statement}</div>
        <div className={classes.actions}>
          <Button onClick={() => props.invalidInput(false)} type="button">
            Okay
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ErrorModal;

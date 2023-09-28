import Card from "./Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.userList.map((user) => {
          console.log(user.age, user.userName);
          return <li key={user.userName}>{`${user.userName}, ${user.age}`}</li>;
        })}
      </ul>
    </Card>
  );
};

export default UsersList;

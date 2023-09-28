import React, { useState } from "react";

import AddUser from "./components/AddUser";
import ErrorModal from "./components/ErrorModal";
import UsersList from "./components/UsersList";

function App() {
  const [isInvalid, setInvalid] = useState(false);
  const [userList, setUserList] = useState([]);
  const [statement, setStatement] = useState("");

  const updateUserList = (userObject) => {
    console.log("User LIst: ", userObject);
    setUserList((prevState) => [...prevState, userObject]);
  };

  const inputIsInvalid = (isInvalid) => {
    setInvalid(isInvalid);
  };

  const invalidInputStatment = (statement1) => {
    console.log(statement1);
    setStatement(statement1);
  };

  return (
    <div>
      <AddUser
        invalidInput={inputIsInvalid}
        invalidInputStatement={invalidInputStatment}
        onUpdate={updateUserList}
      ></AddUser>
      {userList.length > 0 && <UsersList userList={userList}></UsersList>}
      {console.log(isInvalid)}
      {console.log(statement)}
      {isInvalid && (
        <ErrorModal
          statement={statement}
          invalidInput={inputIsInvalid}
        ></ErrorModal>
      )}
    </div>
  );
}

export default App;

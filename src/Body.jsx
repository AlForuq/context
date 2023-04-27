import React, { useContext } from "react";
import "./App.css";
import { StudentContext } from "./context";

function Body() {
  console.log("body");

  const { students } = useContext(StudentContext);
  const [users, setUser] = students;

  let onDelete = (id) => {
    let res = users.filter((v) => v.id !== id);
    setUser(res);
  };

  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h2 key={user.id}>{user.name}</h2>
            <button onClick={() => onDelete(user.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default Body;

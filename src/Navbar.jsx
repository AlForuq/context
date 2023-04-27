import React, { useContext } from "react";
import { StudentContext } from "./context";

export const Navbar = () => {
  console.log("navbar");
  const { students } = useContext(StudentContext);
  const [users] = students;
  return <h1>Navbar {users.length} </h1>;
};

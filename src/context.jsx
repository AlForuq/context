import React, { createContext, useContext, useState } from "react";
import { s } from "./mock.js";

export const StudentContext = createContext();
export const GeneralUseContext = () => useContext(StudentContext);
// we just export GeneralUseContext and import it in any file we want,
// so that we dont have to import useContext and StudentContext anymroe

export const StudentProvider = ({ children }) => {
  const [users, setUser] = useState(s);
  const [mode, setMode] = useState(true);

  return (
    <StudentContext.Provider
      value={{ students: [users, setUser], modes: [mode, setMode] }}
    >
      {children}
    </StudentContext.Provider>
  );
};

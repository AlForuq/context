import React from "react";
import "./App.css";
import Body from "./Body";
import { Navbar } from "./Navbar";
import { GeneralUseContext } from "./context";
import { ThemeProvider, createGlobalStyle } from "styled-components";

function App() {
  console.log("app");

  const { modes } = GeneralUseContext();
  // we just import GeneralUseContext which returns useContext(StudentContext),
  // so that we dont have to import useContext and StudentContext anymore

  const [mode, setMode] = modes;
  const onMode = () => {
    setMode(!mode);
  };

  const Global = createGlobalStyle`
    body{
      background-color: ${({ theme }) => theme.bg};
      color:${({ theme }) => theme.cl};
    }
  `;
  const theme = {
    bg: mode ? "#333" : "white",
    cl: mode ? "white" : "#333",
  };

  return (
    <ThemeProvider theme={theme}>
      <Global />
      <button onClick={onMode}>{mode ? "White" : "Dark"}</button>
      <Navbar />
      <Body />
    </ThemeProvider>
  );
}

export default App;

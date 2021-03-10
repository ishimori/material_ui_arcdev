import React from "react";
import { ThemeProvider } from "@material-ui/styles";

import theme from "./ui/Theme";
import Header from "./ui/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* console.log({theme}) */}
      <Header />
      Hello
    </ThemeProvider>
  );
}

export default App;

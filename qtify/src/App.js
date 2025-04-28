import NavBar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import theme  from "./Theme";
import {cssVariables} from "./Theme";
import "./App.module.css";
import { ThemeProvider } from "@emotion/react";

export default function App() {
  return (
    <ThemeProvider theme={theme} style={cssVariables}>
    <div className="App">
      <NavBar />
      <Hero />
    </div>
    </ThemeProvider>
  );
}

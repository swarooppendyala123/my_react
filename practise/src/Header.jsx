import { useContext } from "react";
import { ThemeContext } from "./ThemeContextProvider";

export default function Header() {
    const themeCxt = useContext(ThemeContext);
  return (
    <header>
      <h1>Demo Website</h1>
      <button onClick={themeCxt.toggleTheme}>Toggle Theme</button>
    </header>
  );
}

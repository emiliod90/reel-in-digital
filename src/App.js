import "./App.css";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { useState } from "react";

// inspiration: https://sreetamdas.com/blog/the-perfect-dark-mode
// inspiration: https://developer.mozilla.org/en-US/docs/Web/CSS
// inspiration: https://stackoverflow.com/questions/56300132/how-to-override-css-prefers-color-scheme-setting
// Beware too many renders problem: https://bobbyhadz.com/blog/react-too-many-re-renders-react-limits-the-number#:~:text=The%20error%20%22Too%20many%20re,instead%20of%20passing%20a%20function.
// html attribute selector: https://stackoverflow.com/questions/61199765/i-have-a-light-dark-theme-toggle-react-component-that-im-trying-to-improve
// Handling events: https://reactjs.org/docs/handling-events.html
// checkbox method (instead of button): https://www.youtube.com/watch?v=xodD0nw2veQ&ab_channel=FlorinPop
// styled jsx: https://github.com/vercel/styled-jsx

function App() {
  console.log("start");

  const mql = window.matchMedia("(prefers-color-scheme: dark)");

  const preferences = !localStorage.getItem("theme")
    ? "false"
    : localStorage.getItem("theme");
  if (preferences === "false") {
    console.log("default to system");
    if (mql.matches) {
      console.log("it is dark mode");
      localStorage.setItem("theme", "dark");
    } else {
      console.log("it is light mode");
      localStorage.setItem("theme", "light");
    }
  } else if (preferences === "light") {
    console.log("light");
    document.querySelector('html').setAttribute('data-theme', 'light');
  } else if (preferences === "dark") {
    console.log("dark");
    document.querySelector('html').setAttribute('data-theme', 'dark');
  } else {
    console.log("os-default theme");
  }

  const [localTheme, setLocalTheme] = useState(preferences);
  console.log(preferences);

  function darkThemeTest(e) {
    if (e.matches) {
      setLocalTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setLocalTheme("light");
      localStorage.setItem("theme", "light");
    }
  }

  mql.addEventListener("change", darkThemeTest);

  function toggleTheme() {
    if (localTheme === "dark") {
      console.log("changing to light");
      setLocalTheme("light");
      localStorage.setItem("theme", "light");
      document.querySelector('html').setAttribute('data-theme', 'light');
    } else {
      console.log("changing to dark");
      setLocalTheme("dark");
      localStorage.setItem("theme", "dark");
      document.querySelector('html').setAttribute('data-theme', 'dark');
    }
  }

  console.log("end");

  return (
    <div className="container">
      <nav>
        <div className="brand">Reel in Digital</div>
        <div>{localTheme}</div>
        <button onClick={toggleTheme}>{localTheme === "dark" ? "Change to light" : "Change to dark"}</button>
      </nav>
    </div>
  );
}

export default App;

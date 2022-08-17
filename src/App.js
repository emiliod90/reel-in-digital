import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import logo from "./assets/Basic Logo white.png";
import Home from "./screens/home";
import About from "./screens/about";
import Contact from "./screens/contact";
import Services from "./screens/services";
import Work from "./screens/work";

// GDrive: https://drive.google.com/drive/folders/1cLbrKHQ2fPPYiaOBWxBnM6_xro6T4sSg
//Style inspiration: https://www.craftz.dog/
// wireframes: https://xd.adobe.com/view/0063b9b1-26fe-47cc-9c8c-2363aaa9f5a2-5530/grid/
// darkmode https://www.youtube.com/watch?v=by5K_pp6t7s&t=227s&ab_channel=ForThoseWhoCode
// Advanced slider: https://www.youtube.com/watch?v=B5LJtXf6QTY&ab_channel=MakeDreamWebsite
// Design trends: https://www.youtube.com/watch?v=6VjvT5uMm-w&ab_channel=DesignCourse
// Text animation: https://www.youtube.com/watch?v=1rTaNzjGOek&ab_channel=DesignCode
// CSS transitions: https://blog.openreplay.com/mastering-css-transitions-with-react-18
// Video background: https://www.youtube.com/watch?v=8MgpE2DTTKA&ab_channel=TraversyMedia

// inspiration: https://sreetamdas.com/blog/the-perfect-dark-mode
// inspiration: https://developer.mozilla.org/en-US/docs/Web/CSS
// inspiration: https://stackoverflow.com/questions/56300132/how-to-override-css-prefers-color-scheme-setting
// Beware too many renders problem: https://bobbyhadz.com/blog/react-too-many-re-renders-react-limits-the-number#:~:text=The%20error%20%22Too%20many%20re,instead%20of%20passing%20a%20function.
// html attribute selector: https://stackoverflow.com/questions/61199765/i-have-a-light-dark-theme-toggle-react-component-that-im-trying-to-improve
// Handling events: https://reactjs.org/docs/handling-events.html
// checkbox method (instead of button): https://www.youtube.com/watch?v=xodD0nw2veQ&ab_channel=FlorinPop
// styled jsx: https://github.com/vercel/styled-jsx

//display loading screen while react loading: https://stackoverflow.com/questions/40987309/react-display-loading-screen-while-dom-is-rendering

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
    document.querySelector("html").setAttribute("data-theme", "light");
  } else if (preferences === "dark") {
    console.log("dark");
    document.querySelector("html").setAttribute("data-theme", "dark");
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
      document.querySelector("html").setAttribute("data-theme", "light");
    } else {
      console.log("changing to dark");
      setLocalTheme("dark");
      localStorage.setItem("theme", "dark");
      document.querySelector("html").setAttribute("data-theme", "dark");
    }
  }

  console.log("end");

  return (
    <div className="container">
      <header>
        <div className="mybrand">Reel in Digital</div>
        <nav>
          <button className="header_circle" onClick={toggleTheme}>
            {localTheme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                height={30}
                width={30}
              >
                <title>Moon</title>
                <path
                  fill="#333"
                  d="M152.62 126.77c0-33 4.85-66.35 17.23-94.77C87.54 67.83 32 151.89 32 247.38 32 375.85 136.15 480 264.62 480c95.49 0 179.55-55.54 215.38-137.85-28.42 12.38-61.8 17.23-94.77 17.23-128.47 0-232.61-104.14-232.61-232.61z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                height={30}
                width={30}
              >
                <title>Sunny</title>
                <path
                  d="M256 118a22 22 0 01-22-22V48a22 22 0 0144 0v48a22 22 0 01-22 22zM256 486a22 22 0 01-22-22v-48a22 22 0 0144 0v48a22 22 0 01-22 22zM369.14 164.86a22 22 0 01-15.56-37.55l33.94-33.94a22 22 0 0131.11 31.11l-33.94 33.94a21.93 21.93 0 01-15.55 6.44zM108.92 425.08a22 22 0 01-15.55-37.56l33.94-33.94a22 22 0 1131.11 31.11l-33.94 33.94a21.94 21.94 0 01-15.56 6.45zM464 278h-48a22 22 0 010-44h48a22 22 0 010 44zM96 278H48a22 22 0 010-44h48a22 22 0 010 44zM403.08 425.08a21.94 21.94 0 01-15.56-6.45l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.55 37.56zM142.86 164.86a21.89 21.89 0 01-15.55-6.44l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.56 37.55zM256 358a102 102 0 11102-102 102.12 102.12 0 01-102 102z"
                  fill="#ffe082"
                />
              </svg>
            )}
          </button>
          <div>Hello</div>
          <div>Services</div>
          <div>About</div>
        </nav>
      </header>
      <section className="hero">
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="150"
          height="150"
          viewBox="0 0 1000.000000 1000.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,1000.000000) scale(0.100000,-0.100000)"
            fill={localTheme === "light" ? "#000000" : "#fff"}
            stroke="none"
          >
            <path
              d="M1137 5713 c-4 -3 -7 -339 -7 -745 l0 -738 290 0 290 0 -2 743 -3
742 -281 3 c-154 1 -283 -1 -287 -5z"
            />
            <path
              d="M1900 4975 l0 -745 327 0 326 0 -6 113 c-6 115 -24 192 -59 261 -31
61 -115 144 -186 183 l-65 36 58 29 c67 35 144 108 174 166 47 91 64 250 40
364 -32 154 -123 250 -284 301 -57 19 -194 37 -272 37 l-53 0 0 -745z"
            />
            <path d="M3980 4975 l0 -745 288 2 287 3 3 743 2 742 -290 0 -290 0 0 -745z" />
            <path
              d="M4877 5713 c-4 -3 -7 -339 -7 -745 l0 -738 290 0 290 0 -2 743 -3
742 -281 3 c-154 1 -283 -1 -287 -5z"
            />
            <path
              d="M5678 5714 c-5 -4 -8 -340 -8 -746 l0 -738 295 0 295 0 0 560 c0 372
-4 577 -11 612 -34 162 -136 259 -312 297 -60 13 -251 24 -259 15z"
            />
            <path
              d="M7647 5713 c-4 -3 -7 -336 -7 -740 l0 -733 43 -2 c115 -4 476 -4 505
0 l32 4 -2 737 -3 736 -281 3 c-154 1 -283 -1 -287 -5z"
            />
            <path
              d="M8418 5714 c-5 -4 -8 -340 -8 -747 l0 -740 105 6 c164 10 269 54 362
149 144 148 216 429 192 756 -23 327 -140 496 -384 556 -70 17 -257 31 -267
20z"
            />
          </g>
        </svg>
      </section>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;

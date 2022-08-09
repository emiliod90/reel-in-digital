import './App.css';
import Toggle from "react-toggle";
import { useState } from "react";


function App() {
  const [isDark, setIsDark] = useState(true);


  return (
    <div className="container">
      <nav>
        <div className="brand">
          Reel in Digital
        </div>
        <div>
          <Toggle
          className="dark-mode-toggle"
          checked={isDark}
          onChange={({target}) => setIsDark(target.checked)}
          icons={{ checked: "🌙", unchecked: "🔅"}}
          aria-label="Dark mode toggle"
          />
        </div>

      </nav>
    </div>
  );
}

export default App;

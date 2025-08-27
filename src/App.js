// App.jsx
import React, { useState } from "react";
import Tooltip from "./Tooltip";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Hover to See Tooltip</h1>
      <button onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
        Hover Me
      </button>
      {show && <Tooltip text="Hello, I'm a tooltip!" />}
    </div>
  );
}

export default App;


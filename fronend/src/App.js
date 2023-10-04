import React, { useState } from "react";

const App = () => {
  const [result, setResult] = useState("");

  const fetchInfo = async () => {
    const url = `http://localhost:5000/api/test`;
    const response = await fetch(url);
    const json = await response.json();
    setResult(json);
  };
  return (
    <div>
      <button onClick={fetchInfo}>Fetch info from api</button>
      <div>Result: {result}</div>
    </div>
  );
};

export default App;

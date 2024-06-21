import React from "react";
import { NetworkProvider } from "./context/NetworkContext";
import { FetchData } from "./components/FetchData";
import NetworkPanel from "./components/NetworkPanel";

function App() {
  return (
    <NetworkProvider>
      <div className="App">
        <FetchData />
        <NetworkPanel />
      </div>
    </NetworkProvider>
  );
}

export default App;

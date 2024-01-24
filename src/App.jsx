import React from "react";
import Board from "./components/Board";

const App = () => {
  return (
    <div className="flex h-screen items-center justify-center gap-10">
      {/* board */}
      <div>
        <Board />
      </div>

      {/* history */}
      <div>
        <h1>Let's Start the Game</h1>
      </div>
    </div>
  );
};

export default App;

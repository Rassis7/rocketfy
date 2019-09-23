import React from "react";
import { DndProvider } from "react-dnd";
import Html5Backend from "react-dnd-html5-backend";

import GlobaStyled from "./styles/global";
import Header from "./components/Header";
import Board from "./components/Board";

function App() {
  return (
    <DndProvider backend={Html5Backend}>
      <Header />
      <Board />
      <GlobaStyled />
    </DndProvider>
  );
}

export default App;

import { useState } from "react";
import { Board } from "./components/Board";
import { SquareValue } from "./components/Square";

export default function Game() {
  const [isXTurn, setIsXTurn] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null) as SquareValue[]]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares: SquareValue[]){
    setIsXTurn(!isXTurn);
    setHistory([...history, nextSquares]);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board isXTurn={isXTurn} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className="game-info">
        <ol></ol>
      </div>
    </div>
  )
}
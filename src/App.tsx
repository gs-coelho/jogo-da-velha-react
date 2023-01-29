import { useState } from "react";
import { Board } from "./components/Board";
import { SquareValue } from "./components/Square";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null) as SquareValue[]]);
  const [currentMove, setCurrentMove] = useState(0);
  const isXTurn = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: SquareValue[]){
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1)
  }

  function jumpTo(nextMove: number){
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares: SquareValue[], moveIndex: number) => {
    let description;

    if(moveIndex === 0){
      description = `Voltar para o início do jogo`
    } else if (moveIndex === currentMove) {
      description = `Você está na jogada ${moveIndex}`
    } else {
      description = `Voltar para a jogada ${moveIndex}`;
    }
    return (
      <li key={moveIndex}>
        <button onClick={() => jumpTo(moveIndex)} disabled={moveIndex === currentMove}>
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board isXTurn={isXTurn} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className="game-info">
        <ul>{moves}</ul>
      </div>
    </div>
  )
}
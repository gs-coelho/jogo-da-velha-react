import { useState } from "react";
import { Board, BoardState } from "./components/Board";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null) as BoardState]);
  const [currentMove, setCurrentMove] = useState(0);
  const isXTurn = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: BoardState){
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1)
  }

  function jumpTo(nextMove: number){
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares: BoardState, moveIndex: number) => {
    let description: string;

    if(moveIndex === 0){
      description = `Voltar para o início do jogo`
    } else if (moveIndex === currentMove) {
      description = `Você está na jogada ${moveIndex}`
    } else {
      description = `Voltar para a jogada ${moveIndex}`;
    }

    return (
      <button
        key={moveIndex}
        onClick={() => jumpTo(moveIndex)}
        disabled={moveIndex === currentMove}
      >
        {description}
      </button>
    );
  }).reverse();

  return (
    <div className="game">
      <div className="game-board">
        <h1>Jogo da Velha</h1>
        <Board isXTurn={isXTurn} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className="game-info">
        <h1>Histórico de Jogadas</h1>
        {moves}
      </div>
    </div>
  )
}
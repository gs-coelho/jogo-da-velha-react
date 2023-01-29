import { Square, SquareValue } from "./Square";


export type BoardProps = {
  isXTurn: boolean,
  squares: SquareValue[],
  onPlay: (nextSquares: SquareValue[]) => void
}

export function Board({isXTurn, squares, onPlay}: BoardProps) {

  const winner = calculateWinner(squares);
  const status = winner ? 
    `O vencedor é ${winner}!` :
    `É a vez de ${isXTurn ? "X" : "O"}`;

  function handleClick(i: number): void {
    if(squares[i] || winner) return;

    const newSquares = squares.slice();
    newSquares[i] = isXTurn ? "X" : "O";

    onPlay(newSquares);
  }


  return(
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </>
  );
}

function calculateWinner(squares: SquareValue[]): SquareValue{
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}
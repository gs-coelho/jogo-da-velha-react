type SquareProps = {
  value: string,
}
  
export function Square({ value }: SquareProps){
  return <button className="square">{value}</button>;
}
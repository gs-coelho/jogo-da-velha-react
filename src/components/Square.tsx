import { useState } from "react";
  
export function Square(){
  const [value, setValue] = useState("");

  return (
    <button
      className="square"
      onClick={() => setValue("X")}
    >
      {value}
    </button>
  );
}
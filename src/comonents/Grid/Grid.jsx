import React, { useState } from "react";
import Card from "../Card/Card";
import "./Grid.css";
import isWinner from "../../helpers/isWinner";

export default function Grid({ numberOfCards }) {
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  const [turn, setTurn] = useState(true); // true=>O ,False=> X
  const [winner, setWinner] = useState(null);

  function play(index) {
    if (turn === true) {
      board[index] = "O";
    } else {
      board[index] = "X";
    }
    const win = isWinner(board, turn ? "O" : "X");

    if (win) {
      setWinner(win);
    }

    setBoard([...board]);
    setTurn(!turn);
  }

  function reset() {
    setTurn(true);
    setWinner(null);
    setBoard(Array(numberOfCards).fill(""));
  }
  return (
    <div className="Grid-Wrapper">
      <button className="reset" onClick={reset}>
        Reset Game
      </button>
      {winner ? (
        <h1 className="winnerText"> Winner Is: {winner}</h1>
      ) : (
        <h1>Current Turn : {turn ? "O" : "X"}</h1>
      )}
      <div className="Grid">
        {board.map((el, idx) => (
          <Card
            key={idx}
            onPlay={play}
            player={el}
            index={idx}
            endGame={winner ? true : false}
          />
        ))}
      </div>
    </div>
  );
}

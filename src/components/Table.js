import React, { useState, useContext } from "react";
import styled from "styled-components";
import Token from "./Token";
import { WhiteButton } from "./Button";
import { ScoreContext } from "../App";

const TableStyled = styled.div`
  margin: 2em 0;
  display: grid;
  grid-template-columns: 130px 130px;
  justify-content: center;
  justify-items: center;
  grid-gap: 30px 50px;
  position: relative;
  & div:nth-of-type(3) {
    grid-column: span 2;
  }
  .in-game {
    text-align: center;
    text-transform: uppercase;
    font-size: 0.8em;
    font-weight: 700;
    letter-spacing: 1px;
  }
  .results {
    text-align: center;
    text-transform: uppercase;
    font-size: 0.8em;
    font-weight: 700;
    letter-spacing: 1px;
    h2 {
      font-size: 56px;
      margin: 10px;
    }
  }
  .line {
    display: ${({ playing }) => (!playing ? "block" : "none")};
    height: 14px;
    background: rgba(0, 0, 0, 0.2);
    position: absolute;
    width: 200px;
    top: 58px;
    &:before {
      content: "";
      height: 14px;
      background: rgba(0, 0, 0, 0.2);
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      transform: rotate(60deg);
      transform-origin: left top;
    }
    &:after {
      content: "";
      height: 14px;
      background: rgba(0, 0, 0, 0.2);
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      transform: rotate(-60deg);
      transform-origin: right top;
    }
  }

  @media screen and (min-width: 1024px ){
    grid-gap: 30px 150px;
    .line{
      width:300px;
    }
  }
`;

const choices = ["paper", "scissors", "rock"];

const Table = () => {
  const [IAPick, setIAPick] = useState("default");
  const [playing, setPlaying] = useState(false);
  const [pick, setPick] = useState("");
  const [result, setResult] = useState('')
  const { score, setScore } = useContext(ScoreContext);

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  const handleClick = async (name) => {
    setPlaying(true);
    setPick(name);
    const IAPick = await lunchIAPick();
    setIAPick(IAPick);
    const result = playWithIA(name, IAPick);
    setResult(result);
    if (result === "win!!") {
      setScore(score + 1);
    }
  };
  const handleTryAgainClick = () => {
    setResult("");
    setPlaying(!playing);
  };

  const lunchIAPick = () => {
    return new Promise((resolve, reject) => {
      let pick;
      const interval = setInterval(() => {
        pick = choices[getRandomInt(0, 3)];
        setIAPick(pick);
      }, 75);

      setTimeout(() => {
        clearInterval(interval);
        resolve(pick);
      }, 2000);
    });
  };

  const playWithIA = (pick, IAchoice) => {
    if (IAchoice === pick) {
      return "draw";
    }
    if (pick === "paper") {
      if (IAchoice === "scissors") {
        return "lose";
      }
      if (IAchoice === "rock") {
        return "win!!";
      }
    }
    if (pick === "scissors") {
      if (IAchoice === "paper") {
        return "win!!";
      }
      if (IAchoice === "rock") {
        return "lose";
      }
    }
    if (pick === "rock") {
      if (IAchoice === "paper") {
        return "lose";
      }
      if (IAchoice === "scissors") {
        return "win!!";
      }
    }
  };

  return (
    <TableStyled playing={playing}>
      <span className="line"></span>

      {!playing ? (
        <>
          <Token name="paper" onClick={handleClick} />
          <Token name="scissors" onClick={handleClick} />
          <Token name="rock" onClick={handleClick} />
        </>
      ) : (
        <>
          <div className="in-game">
            <Token
              name={pick}
              isShadowAnimated={result === "win!!" ? "true" : null}
            />
            <p>You picked</p>
          </div>
          <div className="in-game">
            <Token
              name={IAPick}
              isShadowAnimated={result === "lose" ? "true" : null}
            />
            <p>The House Picked</p>
          </div>
          <div className="results">
            {result ? (
              <>
                <h2>You {result}</h2>
                <WhiteButton onClick={handleTryAgainClick}>
                  Play Again
                </WhiteButton>
              </>
            ) : null}
          </div>
        </>
      )}
    </TableStyled>
  );
};

export default Table;

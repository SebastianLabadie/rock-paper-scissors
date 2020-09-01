import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const RulesStyled = styled.div`
  text-align: center;
  .rules-overlay {
    background: #fff;
    padding:3em 0;
    z-index: 100;
    position: fixed;

    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    h2 {
      color: #3b4262;
      text-transform: uppercase;
      font-weight: 700;
      margin-bottom:2em;
    }
    .close-btn{
        margin-top:2em 0;
    }
  }
`;

const Rules = () => {
  const [playing, setPlaying] = useState(true);

  const handleToggleRulesClick = () => {
    setPlaying(!playing);
  };

  return (
    <RulesStyled>
      {playing ? (
        <div className="rules-overlay">
          <h2>Rules</h2>
          <img src="./images/image-rules.svg" alt="Game Rules img" />
          <img
            onClick={handleToggleRulesClick}
            className="close-btn"
            src="./images/icon-close.svg"
            alt="Icon close"
          />
        </div>
      ) : null}

      <Button onClick={handleToggleRulesClick} />
    </RulesStyled>
  );
};

export default Rules;

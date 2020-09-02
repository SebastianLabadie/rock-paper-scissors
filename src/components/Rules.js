import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const RulesStyled = styled.div`
  text-align: center;
  &::before {
    content: '';
    display: ${({ visible }) => visible ? 'block' : 'none'};
    position: absolute;
    z-index: 2;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0,0,0,.6);
  }
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
        cursor: pointer;
    }
  }
 
  @media screen and (min-width: 768px) {
    .button {
      position: fixed;
      right: 2em;
      bottom: 2em;
    }
    .rules-modal {
      width: 400px;
      margin: auto;
      border-radius: 10px;
      top: 0;
      bottom: initial;
      transform: translateY(50%);
      padding: 2em;
      box-sizing: border-box;
      h2 {
        font-size: 32px;
        align-self: flex-start;
        margin: 0 0 1.2em 0;
      }
    .close-btn {
      position: absolute;
      right: 2em;
      top: 3em;
    }
    }
    }
`;

const Rules = () => {
  const [visible, setVisible] = useState(false);

  const handleToggleRulesClick = () => {
    setVisible(!visible);
  };

  return (
    <RulesStyled visible={visible}>
      {visible ? (
        <div className="rules-modal">
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

        <Button onClick={handleToggleRulesClick} className="button">
                Rules
            </Button>
    </RulesStyled>
  );
};

export default Rules;

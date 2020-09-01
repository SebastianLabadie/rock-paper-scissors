import React from "react";
import styled from "styled-components";
import Token from "./Token";

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

  .line {
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
`;

const Table = () => {
  return (
    <TableStyled>
      <span className="line"></span>
      <Token name="paper" />
      <Token name="scissors" />
      <Token name="rock" />
    </TableStyled>
  );
};

export default Table;

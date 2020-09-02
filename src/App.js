import React, { createContext,useState } from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Table from "./components/Table";
import Rules from "./components/Rules";
import Wrapper from "./components/Wrapper";

const AppStyled = styled.main`
  background: radial-gradient(circle at top, #1f3757 20%, #131537 100%);

  .app-container {
    padding: 2em;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
  }
`;

export const ScoreContext = createContext();
  
function App() {
  const [score,setScore]=useState(0)

  return (
    <ScoreContext.Provider
     value={{score,setScore}}>
      <AppStyled>
        <Wrapper>
          <div className="app-container">
            <Header />
            <Table />
            <Rules />
          </div>
        </Wrapper>
      </AppStyled>
    </ScoreContext.Provider>
  );
}

export default App;

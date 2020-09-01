import React from 'react';
import './App.css';
import styled from 'styled-components'
import Header from './components/Header'
import Table from './components/Table'
import Wrapper from './components/Wrapper'

const AppStyled=styled.main`
background:radial-gradient(circle at top, #1F3757 20%, #131537 100%);
    
    .app-container{
    padding:2em;
    box-sizing:border-box;   
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    min-height:100vh;
    }
`

function App() {
  return (
    <AppStyled >
      <Wrapper>
        <div className="app-container">
          <Header />
          <Table />
          <h2>rules</h2>
        </div>
      </Wrapper>
    </AppStyled>
  );
}

export default App;

import React,{useContext} from 'react'
import styled from 'styled-components'
import {ScoreContext} from '../App'
const ScoreStyled=styled.div`
    background: #fff;
    color: black;
    text-align:center;
    width:80px;
    padding:10px 0;
    border-radius: .5em ;
    font-weight:700;
    small{
        color:#2A45C2;
        text-transform:uppercase;
        font-size:10px;
    }
    p{
        color:#565468;
        font-size:40px;
        margin:0;
        
    }

  @media screen and (min-width: 768px) {
    padding:10px 20px;
      small{
        font-size:16px;
      }
    p{
        font-size:60px;
    }
  }

`


const Score = () => {

    const {score}=useContext(ScoreContext)

    return (
        <ScoreStyled>
           <small>score</small>
           <p>{score}</p>
        </ScoreStyled>
    )
}

export default Score

import React from 'react'
import styled from 'styled-components'

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
`


const Score = () => {
    return (
        <ScoreStyled>
           <small>score</small>
           <p>12</p>
        </ScoreStyled>
    )
}

export default Score

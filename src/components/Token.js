import React from 'react'
import styled from 'styled-components'

const TokenStyled=styled.div`
    width:125px;
    height:125px;
    border:15px solid  ${({color})=>color.base};
    box-sizing: border-box;
     background:${({color})=>color.border==='#122343' ?  '#122343' : 'radial-gradient(circle 200px at bottom,#fff  45% , #bcc1d5 48%)'};
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    box-shadow:0 5px 0 0 ${({color})=>color.border};
    position:relative;
    cursor:pointer;

    &:active{
        transform:scale(.9);
    }
`

const colors={
    paper:{
        base:'#516ef4',
        border:'#2543c3'
    },
    rock:{
        base:'#de3a5a',
        border:'#980e31'
    },
    scissors:{
        base:'#eca81e',
        border:'#c76c14'
    },
    default:{
        base:'#152a51',
        border:'#122343'
    },
    
}   

const Token = ({name = 'default', onClick}) => {
    
    const color= colors[name] ? colors[name] : colors.default
    return (
        <TokenStyled onClick={()=>onClick(name)} color={color}>
            { name === 'default' ?
            null :
            <img src={`./images/icon-${name}.svg`} alt="asd"/>
            }
        </TokenStyled>
    )
}

export default Token

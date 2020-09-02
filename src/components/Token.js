import React from 'react'
import styled,{keyframes} from 'styled-components'

const shadow=keyframes`
    to{
        box-shadow: 0 0 0 40px rgba(255,255,255,.04), 0 0 0 80px rgba(255,255,255,.04), 0 0 0 120px rgba(255,255,255,.02);
        transform:scale(1.16);
    }
`
const box=keyframes`
    to{
        transform:rotateY(360deg);
    }
`

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
    animation:1s ${({isShadowAnimated})=> isShadowAnimated ? shadow : ''} forwards ;
    ${({isShadowAnimated})=> isShadowAnimated ? 'box-shadow: 0 0 0 0px rgba(255,255,255,.04), 0 0 0 0px rgba(255,255,255,.04), 0 0 0 0px rgba(255,255,255,.02);' : null}
    
    img{

    animation:1s ${({isShadowAnimated})=> isShadowAnimated ? box : ''} forwards ; ;
    }
    
    &:active{
        transform:scale(.9);
    }

    @media screen and (min-width: 1024px ){
        ${({ playing }) => playing ? 'width: 300px; height: 295px; border-width: 32px;' : 'width: 200px; height: 195px;'}
     background:${({color})=>color.border==='#122343' ?  '#122343' : 'radial-gradient(circle 200px at bottom,#fff  66% , #bcc1d5 88%)'};
        
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

const Token = ({name = 'default', onClick,isShadowAnimated = false,playing}) => {
    
    const color= colors[name] ? colors[name] : colors.default
    return (
        <TokenStyled onClick={()=>onClick ? onClick(name) : null } color={color} isShadowAnimated={isShadowAnimated} playing={playing}>
            { name === 'default' ?
            null :
            <img src={`./images/icon-${name}.svg`} alt="asd"/>
            }
        </TokenStyled>
    )
}

export default Token

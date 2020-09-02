import React from 'react'
import styled from 'styled-components'
import Score from './Score'


const HeaderStyled=styled.div`
    border:3px solid rgba(255,255,255,0.3);
    padding:12px 12px 12px 24px;
    border-radius:.5em;
    display:flex;
    align-items:center;
    justify-content:space-between;
    h1{
        font-size:21px;
        text-transform:uppercase;
        font-weight:700;
        line-height:16px;
        margin:0;
    }
    @media screen and (min-width: 768px) {
        padding:18px 18px 18px 18px ;
        h1{
        font-size:36px;
        line-height:.9;
    }
    }
`

const Header = () => {
    return (
        <HeaderStyled>
            <h1>
                Rock <br/>
                Papper <br/>
                Scissors
            </h1>
        <Score value='0'/>
        </HeaderStyled>
    )
}

export default Header

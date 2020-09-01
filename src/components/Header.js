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
        <Score />
        </HeaderStyled>
    )
}

export default Header

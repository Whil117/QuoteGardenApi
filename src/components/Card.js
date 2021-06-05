import styled from '@emotion/styled'
import React from 'react'

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 7px 8px;
    height: auto;
    width: 220px;
    /* height: 214px; */

    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    margin: 5px;
    font-family: Roboto;
    h2{
        color: #105EDD;
    }
    @media (max-wid:414px){
        width: 179px;
    }
`

export const CardRandom = ({ celebritie }) => {
    const { _id, quoteText, quoteAuthor, quoteGenre } = celebritie
    return (
        <Card >
            <h2>{quoteAuthor}</h2>
            <p><b>{quoteGenre}</b></p>
            <p>{quoteText}</p>
        </Card>
    )
}

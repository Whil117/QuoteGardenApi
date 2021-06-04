import styled from "@emotion/styled";

export const Button = styled.button`
        border:none;
        width: 49px;
        height: 49px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        background: ${({ blue }) => blue ? '#105EDD' : '#0B3075'};
`
export const Selection = styled.select`
        border:none;
        width: 49px;
        height: 49px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 0px 8px 8px 0px;
        color: white;
        background-color:#105EDD;
`
export const Options = styled.option`
       background-color:white;
       color: black;
`
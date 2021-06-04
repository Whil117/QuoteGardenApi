import React from 'react'
import { Options, Selection } from '../styles/ButtonStyled'

export const Select = ({handleCount}) => {
    return (
        <Selection onChange={handleCount}>
            <Options value="1">1</Options>
            <Options value="5">5</Options>
            <Options value="8">8</Options>
            <Options value="10">10</Options>
        </Selection>
    )
}

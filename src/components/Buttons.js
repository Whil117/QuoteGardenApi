import React from 'react'
import { Button } from '../styles/ButtonStyled'

export const Buttons = ({ submit, myRandomQuotes }) => {
    return (
        <>
            <Button blue onClick={submit}>
                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.8333 32.1667C26.1971 32.1667 32.1667 26.1971 32.1667 18.8333C32.1667 11.4695 26.1971 5.5 18.8333 5.5C11.4695 5.5 5.5 11.4695 5.5 18.8333C5.5 26.1971 11.4695 32.1667 18.8333 32.1667Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M35 35L29 29" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </Button>
            <Button onClick={myRandomQuotes} >
                <svg width="31" height="37" viewBox="0 0 31 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 8.50001V13.5L22.8333 6.83334L15.5 0.166672V5.16667C7.39665 5.16667 0.833313 11.1333 0.833313 18.5C0.833313 21.1167 1.67665 23.55 3.10665 25.6L5.78331 23.1667C4.95831 21.7833 4.49998 20.1833 4.49998 18.5C4.49998 12.9833 9.43165 8.50001 15.5 8.50001ZM27.8933 11.4L25.2166 13.8333C26.0233 15.2333 26.5 16.8167 26.5 18.5C26.5 24.0167 21.5683 28.5 15.5 28.5V23.5L8.16665 30.1667L15.5 36.8333V31.8333C23.6033 31.8333 30.1666 25.8667 30.1666 18.5C30.1666 15.8833 29.3233 13.45 27.8933 11.4V11.4Z" fill="white" />
                </svg>
            </Button>
        </>
    )
}

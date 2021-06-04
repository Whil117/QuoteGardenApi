import styled from '@emotion/styled'
import React from 'react'
import { Buttons } from './Buttons'
import { Select } from './Select'

export const Search = styled.input`
       width: 302px;
       /* height: 49px; */
       padding: 7px 22px;
       border: 0.5px solid #505050;
       border-radius: 8px 0px 0px 8px;
       font-size: 18px;
       font-family: Roboto;
       @media (max-width:611px){
        width: 216px;
       }
       /* @media (max-width:513px){
           width: 142px;
       } */
       @media (max-width:530px){
     
           width: 159px;
       }
       @media (max-width:468px){
           width: 80px;
       }
`
export const BarNav = styled.div`
        display: flex;
        margin-right: 10px;
        margin-left: 10px;
`
export const BarNav2 = styled.div`
        display: flex;
        justify-content: space-between;
        width: 120px;
`
export const NavBarSearch = styled.div`
        display: flex;
        /* width: 615px; */
        justify-content: center;

`

export const Nav = ({ name, search, handleCount, myRandomQuotes, submit }) => {
    return (
        <NavBarSearch>
            <BarNav>
                <Search type="text" placeholder="Search for a Celebrity..." required value={name} onChange={search} />
                <Select handleCount={handleCount} />
            </BarNav>
            <BarNav2>
                <Buttons myRandomQuotes={myRandomQuotes} submit={submit} />
            </BarNav2>
        </NavBarSearch>
    )
}

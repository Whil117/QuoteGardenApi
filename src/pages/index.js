import styled from '@emotion/styled';
import React, { useState } from 'react'
import { CardRandom } from '../components/Card';
import { Loading } from '../components/Loading';
import { Nav } from '../components/Nav';


const Title = styled.h1`
      font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
      font-size: 40px;
      line-height: 56px;
      color: #105EDD;

`
const TitleDiv = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-family: Roboto;
`
const CardsDiv = styled.div`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      /* align-items: center; */
      margin-top: 100px;
      margin-bottom: 100px;
`
const ErrorTitle = styled.h3`
      color: red;
`
const index = () => {
  const [celebrities, setCelebrities] = useState([])
  const [name, setName] = useState('')
  const [count, setCount] = useState(1)
  const [loading, setLoading] = useState(false)

  const url = 'https://quote-garden.herokuapp.com/api/v3/quotes';

  const myData = async (url) => {
    const resp = await fetch(url);
    const { data } = await resp.json();
    setCelebrities(data)
    setLoading(false)
  };

  const search = (event) => {
    const name = event.target.value
    function firstCharUppercase(name) {
      return name.charAt(0).toUpperCase() + name.slice(1)
    }
    setName(firstCharUppercase(name))
  }
  const handleCount = (event) => {
    setCount(event.target.value)
  }
  const myRandomQuotes = () => {
    const randomQuote = url + `/random?count=${Number(count)}`;
    myData(randomQuote)
    setLoading(true)
  };

  const submit = () => {
    const author = url + `/random?count=${Number(count)}&author=${name}`;
    const isValidNameAuthor = name === '' ?   (setLoading(1)) : (myData(author), setLoading(true))
    return isValidNameAuthor 
    
  }
  return (
    <div>
      <TitleDiv>
        <Title>QuoteGarden</Title>
        <Nav name={name} search={search} handleCount={handleCount} myRandomQuotes={myRandomQuotes} submit={submit} />
        {loading === true&&
          <Loading />
        }
        {
          loading === 1 &&
          <ErrorTitle>Hey ingresa un nombre</ErrorTitle>
        }
      </TitleDiv>
      <CardsDiv>
        {celebrities.map(item => (
          <CardRandom key={item._id} celebritie={item} />
        ))}
      </CardsDiv>
    </div>
  )
}
export default index
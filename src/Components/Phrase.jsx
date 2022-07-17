import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  padding: 3rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 800px;

  @media (min-width: 992px) {
    margin-top: 10rem;
  }
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;}
  h2{
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 6rem;
  }
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.4rem;
    font-weight: bold;
    text-align: right;
    color: #666;
    margin-top: 2rem;
  }
`;
const random = () =>{
  let descuento = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
  return descuento;
}
const Phrase = ({ phrase }) => {
  return (
    <>
      <Container>
        <h1>Su codigo para obtener un {random()}% de descuento es:</h1>
        <h2>{phrase.uid}</h2>
      </Container>
    </>
  );
};

export default Phrase;

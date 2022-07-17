import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Phrase from './Components/Phrase';
import { uid } from 'uid';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 0.5rem;
  font-size: 2rem;
  border: none;
  transition: background-size 0.8s ease;
  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {
  const promo = {"name":'test1',"desc":'Testeando bbad modified_1',"uid":`${uid(6)}`,"used": 0};
  const [phrase, setPhrase] = useState({});
  const getPhrase = async () => {
    setPhrase(promo);
  };
  useEffect(() => {
    getPhrase();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Container>
        <Phrase phrase={phrase} />
        <Button onClick={async () => {
          axios.post('http://localhost:3000/promo',promo)
          .then(response => console.log(response))
          .catch(error => console.log(error)) 
        }}>Obtener</Button>
      </Container>
    </>
  );
}

export default App;

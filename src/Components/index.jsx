import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Phrase from './Phrase';
import { uid } from 'uid';
import axios from 'axios';
import srcLogo from '../assets/images/logo.png'

const Logo = styled.img`
  z-index: 1;
  max-height: 200px;
  width: auto;
`

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
    <div className='container d-flex flex-column align-items-center min-vh-100 justify-content-center' style={{zIndex: 1}}>
      <Logo className='mb-5' src={srcLogo} alt="stetic logo" />
      <Phrase phrase={phrase} />
    </div>
  );
}

export default App;

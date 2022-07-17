import React from 'react';
import {getRandomNumber} from '../Utils';

const Phrase = ({ phrase }) => {

  const getDiscount = () => { 
    return getRandomNumber(15, 10);
  }

  return (
    <div>
      <h1 className='h3 text-white text-center'>Su codigo para obtener un {getDiscount()}% de descuento es:</h1>
      <div className='d-flex justify-content-center'>
        <h2 className='h4 text-white text-center border d-inline p-2 mt-2'>{phrase.uid}</h2>
      </div>
    </div>
  );
};

export default Phrase;

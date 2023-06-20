import React from 'react'
import Bebas from './Bebas';

const HellowWorld = ({name}) => {
    const fruits = ["Manggo", "Banana", "Lemon"];
  return (
    <div>
        <h1>Fruits</h1>
        <div>
        {fruits.map((fruit) => (
            <Bebas name={fruit}/>
            ))}
        </div>
    </div>
  );
};

export default HellowWorld
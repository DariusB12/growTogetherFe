import React from 'react';


//TODO: DE FACUT SA ARATE CA IN POZA, UNUL PT LEFT CORNER SI ALTA COMPONENT PT UPPER RIGT CORNER
const LeftBackgroundBlob: React.FC = () => (
    <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" style={{ width: '100vw', height: '100vh', float: 'left', margin: 0}}>
        <path fill="#ff99bb" d="M0,0 L74,0 C63,47 43,107 72,149 C104,195 241,162 316,194 C390,226 348,322 439,400 L0,400 Z" />
    </svg>
);
export default LeftBackgroundBlob;


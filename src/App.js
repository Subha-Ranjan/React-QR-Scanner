import React, { useState } from 'react';
import QrReader from 'react-qr-reader';
import './App.css';

export default function App() {
  const [result, setResult] = useState('No result');
  let handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  let handleError = (err) => {
    alert(err);
  };
  return (
    <div className='container'>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ "width": '47%' }}
        
      />
      <p>{result}</p>
    </div>
  );
}

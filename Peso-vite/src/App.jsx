
import React, { useState } from 'react';
import './App.css'


  // src/components/IMCCalculator.js
const IMCCalculator = () => {
  const [Peso, setPeso] = useState('');
  const [Altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [message, setMessage] = useState('');

  const calculateIMC = () => {
    if (Peso && Altura) {
      const AlturaInMetros = Altura / 100; // Convertendo altura de cm para metros
      const imcValue = Peso / (AlturaInMetros * AlturaInMetros);
      setImc(imcValue.toFixed(2));
      
      // Determinando a categoria de acordo com o IMC
      if (imcValue < 18.5) {
        setMessage('Abaixo do peso');
      } else if (imcValue >= 18.5 && imcValue <= 24.9) {
        setMessage('Peso normal');
      } else if (imcValue >= 25 && imcValue <= 29.9) {
        setMessage('Sobrepeso');
      } else {
        setMessage('Obesidade');
      }
    } else {
      setMessage('Por favor, preencha os campos de peso e altura.');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Calculadora de IMC</h1>
      <div>
        <label>Peso (kg): </label>
        <input
          type="number"
          value={Peso}
          onChange={(e) => setPeso(e.target.value)}
          placeholder="Digite seu peso"
        />
      </div>
      <div>
        <label>Altura (cm): </label>
        <input
          type="number"
          value={Altura}
          onChange={(e) => setAltura(e.target.value)}
          placeholder="Digite sua altura"
        />
      </div>
      <button onClick={calculateIMC} style={{ marginTop: '20px' }}>Calcular IMC</button>
      
      {imc && (
        <div style={{ marginTop: '20px' }}>
          <h2>Seu IMC: {imc}</h2>
          <h3>{message}</h3>
        </div>
      )}
    </div>
  );
};

export default IMCCalculator;


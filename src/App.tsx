import './App.css';
import {useState} from 'react';
import Ball from './components/Ball/Ball';

const App = () => {
  const [numberBall, setNumberBall] = useState([5, 11, 16, 23, 32]);

  const createNewNumber = () => {
      const newNumber: number[] = [];
      while (newNumber.length < 5) {
          const randomNumber = Math.floor(Math.random() * (36 - 5 + 1)) + 5;
          if(!newNumber.includes(randomNumber)) {
              newNumber.push(randomNumber);
          }
      }
      newNumber.sort((a, b) => a - b);
      setNumberBall(newNumber);
  };

  return (
    <>
      <button className="btn" onClick={createNewNumber}>New numbers</button>
      {numberBall.map((num, index) => (
          <Ball key={index} number={num} />
      ))}
    </>
  );
};

export default App;

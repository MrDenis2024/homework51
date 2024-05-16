import './App.css';
import {useState} from 'react';
import Ball from './components/Ball/Ball';

const App = () => {
  const [numberBall] = useState([5, 11, 16, 23, 32]);


  return (
    <>
      <button className="btn">New numbers</button>
      <Ball number={numberBall[0]}/>
      <Ball number={numberBall[1]}/>
      <Ball number={numberBall[2]}/>
      <Ball number={numberBall[3]}/>
      <Ball number={numberBall[4]}/>
    </>
  );
};

export default App;

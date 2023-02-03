import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const url = 'https://api.adviceslip.com/advice';

function App() {
  const [quotes, setQuotes] = useState(null);
  const [value, setValue] = useState('random quote');
  const [number, setNumber] = useState('1');
  async function getquote() {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      console.log(response.data.slip.advice);
      setQuotes(response.data.slip.advice);
      setNumber(response.data.slip.id);
    } catch (error) {
      console.error(error);
    }
  }
  getquote();

  return (
    <section>
      <p>Advice # {number}</p>
      <h2>"{quotes}"</h2>
    </section>
  );
}

export default App;

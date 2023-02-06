import axios from 'axios';
import { useState } from 'react';
import btn from './images/icon-dice.svg';
import dividerDesktop from './images/pattern-divider-desktop.svg';
import dividerMobile from './images/pattern-divider-mobile.svg';
import styled from 'styled-components';

const url = 'https://api.adviceslip.com/advice';

const Divider = styled.div`
  background-image: url(${dividerMobile});
  background-position: center;
  height: 20px;
  background-position-x: center;
  background-repeat: no-repeat;
  margin-bottom: 1.5rem;
  @media (min-width: 500px) {
    background: url(${dividerDesktop});
    background-repeat: no-repeat;
    background-position-x: center;
  }
`;

const BtnContainer = styled.button`
  aligh-items: center;
  background: var(--NeonGreen);
  text-align: center;
  border-radius: 50px;
  border: none;
  padding: 20px;
  margin-top: -30px;
  &:hover {
    box-shadow: 0px 0px 20px var(--NeonGreen);
  }
`;
const Btn = styled.img`
 padding:100px
  border: none;
  /
`;

const Container = styled.div`
  background: var(--DarkGrayishBlue);
  width: 90%;
  border-radius: 15px;
  text-align: center;
  justify-content: center;
  margin: auto;
  margin-top: 5rem;
  padding: 2rem;
  align-items: center;
  @media (min-width: 500px) {
    width: 50%;
  }
`;

const Advice = styled.p`
  color: var(--NeonGreen);
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
  margin-bottom: 1rem;
`;

const Quote = styled.h2`
  color: var(--LightCyan);
  line-height: 1.5;
  font-size: 28px;

  margin-bottom: 2rem;
`;

const Section = styled.section`
  text-align: center;
`;

function App() {
  const [quotes, setQuotes] = useState(null);

  const [number, setNumber] = useState('1');
  async function getquote() {
    try {
      const response = await axios.get(url);

      setQuotes(response.data.slip.advice);
      setNumber(response.data.slip.id);
    } catch (error) {
      console.error(error);
    }
  }
  getquote();

  return (
    <Section>
      <Container>
        <Advice>Advice # {number}</Advice>
        <Quote>"{quotes}"</Quote>
        <Divider />
        {/* <img src={dividerMobile} alt='' /> */}
      </Container>
      <BtnContainer onClick={getquote}>
        <Btn src={btn} alt='' />
      </BtnContainer>
    </Section>
  );
}

export default App;

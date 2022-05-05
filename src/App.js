import { useState } from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { magic } from './utils';

const methods = [
  { run: (arr) => magic(arr, 1), text: '→' },
  { run: (arr) => magic(arr, 2), text: '←' },
  { run: (arr) => magic(arr, 3), text: '↓' },
  { run: (arr) => magic(arr, 4), text: '↑' },
];

const App = () => {
  const [currentMethod, setCurrentMethod] = useState(1);
  const [row, setRow] = useState(0);
  const [col, setCol] = useState(0);
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const convertStringToArray = (str) => {
    const arr = [];
    let cnt = 0;
    for (let i = 0; i < row; i++) {
      arr.push([]);
      for (let j = 0; j < col; j++) {
        arr[i].push(str[cnt]);
        cnt += 1;
      }
    }
    return arr;
  };

  const convertArrayToString = (arr) => {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        str += arr[i][j];
      }
    }
    return str;
  };

  return (
    <Main>
      <Window>
        <Control>
          <MinorInput
            placeholder="row"
            onChange={(e) => setRow(e.target.value)}
          />
          <MinorInput
            placeholder="col"
            onChange={(e) => setCol(e.target.value)}
          />
          <Ugol
            placeholder="Ugol"
            onChange={(e) => setCurrentMethod(Number(e.target.value))}
          >
            <Option value="0">Слева-Направо</Option>
            <Option value="1">Справа-Налево</Option>
            <Option value="2">Сверху-Вниз</Option>
            <Option value="3">Снизу-Вверх</Option>
          </Ugol>
          <Button
            onClick={() => {
              if (
                text.length % row !== 0 ||
                text.length % col !== 0 ||
                (text.length / row) % col !== 0
              ) {
                setResult('Дай нормальные данные');
                return 'Ti idiot prosto';
              }
              const initArr = convertStringToArray(text);
              const cryptedText = methods[currentMethod].run(initArr);
              const resultText = convertArrayToString(cryptedText);
              setResult(resultText);
            }}
          >
            Zashivrovat'
          </Button>
        </Control>
        <MainInput
          placeholder="Your text"
          onChange={(e) => setText(e.target.value)}
        />
        <CenterText>{result}</CenterText>
      </Window>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

const Control = styled.div`
  display: flex;
  flex: 1;
  gap: 2rem;
  padding-left: 5rem;
  padding-right: 5rem;
  padding-top: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(155, 155, 155, 0.16);
`;

const MinorInput = styled.input`
  height: 70px;
  width: 5rem;
  background-color: rgba(50, 50, 155, 0.2);
  color: #fff;
  font-size: 36px;
  border-radius: 10px;
  text-align: center;
  border: 2px solid rgba(50, 50, 155, 0.6);
`;

const Window = styled.div`
  width: 70vw;
  height: 70vh;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 50px;
  color: #fff;

  @media (max-width: 1200px) {
    width: 100vw;
  }
`;

const moveGradient = keyframes`
  50% {
    background-position: 100% 50%;
}
`;

const Button = styled.button`
  margin-left: auto;
  font-size: 36px;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background-color: rgba(50, 50, 155, 0.2);
  color: #fff;
  border: 2px solid rgba(50, 50, 155, 0.6);
  cursor: pointer;
  transition: all 100ms;
  &:hover {
    background: linear-gradient(
      60deg,
      hsl(269, 85%, 66%),
      hsl(314, 85%, 66%),
      red,
      orange
    );
    animation: ${moveGradient} 2s alternate infinite;
    background-size: 300% 300%;
    background-position: 0 50%;
  }
`;

const MainInput = styled.input`
  margin: 2rem 15%;
  width: 70%;
  height: 50px;
  border-radius: 20px;
  padding: 0.5rem 2rem;
  font-size: 24px;
  background-color: rgba(50, 50, 155, 0.2);
  color: #fff;
  transition: all 200ms;
  border: 1px solid rgba(50, 50, 155, 0.6);
  &:focus {
    background-color: rgba(50, 50, 155, 0.7);
    border: 2px solid rgba(150, 150, 255, 0.3);
  }
`;

const Ugol = styled.select`
  font-size: 36px;
  height: 70px;
  background-color: rgba(50, 50, 155, 0.2);
  color: #fff;
  font-size: 36px;
  border-radius: 10px;
  text-align: center;
  border: 2px solid rgba(50, 50, 155, 0.6);
  display: flex;
  align-items: center;
`;
const Option = styled.option`
  background-color: rgba(50, 50, 155, 1);
`;

const CenterText = styled.p`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default App;

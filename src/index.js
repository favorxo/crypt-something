import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300;400;500;600&display=swap');
  body {
    width: 100vw;
    height: 100vh;
    background: radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%);
  }

  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  font-family: 'Merriweather Sans', sans-serif;
  outline: none;
  border: none;
}
`;


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Poppins:200i,300,400&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Raleway:700&display=swap');
    :root {
    --main-white: #f0f0f0;
    --main-red: #be3144;
    --main-blue: #45567d;
    --main-gray: ;
    --hover-gray: #0f1112;
  }
  * {
    margin:0;
    padding:0;
  }
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    scroll-behaviour: smooth;
  }
  body{
    font-family: 'Poppins', sans-serif;
    font-size: 1.8rem;
    font-weight: 400;
    color: var(--main-white); 
  }
  h1,
  h2 {
    font-family: 'Raleway',
      sans-serif;
    font-weight: 700;
    text-align: center;
  }
  h1 {
    font-size: 6rem;
  }
  h2 {
    font-size: 3rem;
  }
  ul {
    list-style:none;
  }
  a {
    text-decoration: none;
    color: var(--main-white);
  }
  p {
    font-size: 2rem;
  }`;
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap');

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    background-color: hsl(50,15%,92%);
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    font-weight: 300;
  }

  p {
    line-height: 1.5;
  }

   img {
    max-width: 100%;
   }

  li {
      list-style-type: none;
      a {
        text-decoration: none;
      }
    }
`;

export default GlobalStyles;

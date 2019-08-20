import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
        * {
          padding: 0;
          outline: 0;
          padding: 0;
          box-sizing: border-box;
        } 
        body{
          font-family: Arial, Helvetica, sans-serif;
          font-size: 16px;
          -webkit-font-smoothing: antialiased;     
        }

        html, body, #root{
          height: 100%;
        } 
`;

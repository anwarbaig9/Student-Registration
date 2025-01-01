import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f4f4f9;
    color: #333;
    font-size: 16px;
    line-height: 1.5;
  }

  h1, h2, h3 {
    color: #4CAF50;
  }
  
  ul {
    list-style-type: none;
  }

  button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    
    &:hover {
      background-color: #45a049;
    }
  }

  input, select {
    padding: 10px;
    margin: 10px 0;
    width: 100%;
    max-width: 300px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }

  .button-container {
    display: flex;
    gap: 10px;
    justify-content: center;
  }
`;

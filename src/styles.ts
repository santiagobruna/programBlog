import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `
  * {
      margin: 0;
      padding: 0;
      font-family: "Inter", serif;
      list-style: none;
      color: #fff;
      background-color: #191919;
  }
  ::placeholder {
    background-image: url("/Pesquisa.svg");
    background-repeat: no-repeat;
    padding-left: 30px;
  }
`
export default GlobalStyle;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #43766C;
    padding: 1rem;
    max-width: 800px;
    margin: 3rem auto;
`

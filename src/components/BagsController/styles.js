import styled from "styled-components";


export const Container = styled.div`
  width: 90vw;
  height: 25vh;
  box-shadow: -2px 6px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    margin-top: 1em;
    font-family: Georgia, serif;
    font-style: italic;
    font-weight: 100;
    font-size: 1.5em;
    color: #4a4a4a;
  }

`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50%;
  margin: 1.5em;
`;

export const BagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 30em;
  font-size: 0.8em;
  margin-left: 2em;
`;



export const Button = styled.button`
  background: #FF8D8D;
  height: 3.25em;
  width: 20em;
  border-radius: 1.2em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  color: #FFFFFF;
  font-weight: bolder;
  margin: -1em;
`;

export const ImageBag = styled.img`
  width: 5em;
`;

export const ImageScanner = styled.img`
  width: 15em;
  height: 10em;
`;

export const StyledSpan = styled.span`
  text-align: center;
  width: 10em;
  margin-left: 2em;
`;
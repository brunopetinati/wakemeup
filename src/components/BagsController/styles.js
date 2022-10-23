import styled from "styled-components";


export const Container = styled.div`
  width: 48vw;
  height: 90vh;
  box-shadow: -2px 6px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-right: 3vw;

  span {
    margin: 1.5em;
    font-family: 'Inter', sans-serif;
    font-style: italic;
    font-weight: 100;
    font-size: 2.5em;
    color: #5c6272;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60%;
`;

export const BagsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 30em;
  height: 70%;
  font-size: 0.8em;
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
`;

export const ImageBag = styled.img`
  width: 5em;
`;

export const ImageScanner = styled.img`
  width: 20em;
  height: 15em;
`;

export const StyledSpan = styled.span`
  text-align: center;
`;
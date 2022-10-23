import styled from "styled-components";

export const Container = styled.div`
  width: 45vw;
  height: 69.7vh;
  box-shadow: -2px 6px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  

  h1 {
    color: #000000;
    text-align: center;
    margin-top: 2em;
  };

  p {
    color: #000000;
    width: 80%;
    text-align: center; 
    font-size: x-large;
  };

  img {
    margin-top: 3em;
    width: 80%;
    height: 40%;
  };

`;

export const InnerContainer = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
`;

export const GearIcon = styled.img`
  width: 3vw !important;
  height: 3vw !important;
  margin-right: 21vw;
  margin-left: -21vw;
`;

export const AccessibilityIcons = styled.div`
  width: 80%;
  height: 5vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 2em;
  
  img {
    width: 8vw;
    height: 3em;
  };

  img:nth-child(4) {
    width: 2.4em;
    height: 2.4em;
  }
`;

/* modal a partir daqui */

export const BagsModalImage = styled.img`
  width: 3em !important;
  height: 3em !important;
`;

export const Button = styled.button`
  background: #3DD5A1;
  height: 3em;
  width: 20em;
  border-radius: 1.2em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  color: #FFFFFF;
  font-weight: bolder;
  font-size: x-large;
`;

export const GreyButton = styled.button`
  background: #5D6174;
  height: 3em;
  width: 20em;
  border-radius: 1.2em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  color: #FFFFFF;
  font-weight: bolder;
  font-size: x-large;
`;
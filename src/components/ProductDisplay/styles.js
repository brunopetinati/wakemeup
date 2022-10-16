import styled from "styled-components";

export const Container = styled.div`
  width: 90vw;
  height: 35vh;
  box-shadow: -2px 6px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1.5em;
  

  h1 {
    color: #3DD5A1;
    margin: 0 auto;
  };

  p {
    color: #3DD5A1;
    width: 80%;
    text-align: center;
  };

  img {
    width: 80%;
    height: 50%;
  };

`;

export const InnerContainer = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1em;
`;

export const GearIcon = styled.img`
  width: 3vw !important;
  height: 3vw !important;
  margin-right: 21vw;
  margin-left: -21vw;
`;

export const IconsContainer = styled.div`
  width: 80%;
  height: 5vh;
  margin-bottom: 1em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 1em;
  
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
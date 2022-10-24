import styled from "styled-components";

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 60vh;

  h1 {
    margin-top: 2em;
  }
`;

export const MainProductDisplay = styled.img`
  height: 25em;
  width: 11em;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 70%;
`; 

export const ImagePriceDisplay = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: flex-start;
`;

export const ProductContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 5vh;
  margin-top: 2em;
  text-align: left;
  font-family: 'Inter', sans-serif;
  font-style: italic;
  font-weight: 100;
  font-size: 1em;
  color: #4a4a4a;

  h3 {
    margin: 0 auto;
  };

  span {
    font-size: 12px;
  };
`;


export const PromotionIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  margin-top: 3em;
  height: 20vh;

  
  span {
    font-weight: normal;
    font-size: 24px;
  };
`;

export const PromotionIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  img {
    height: 2em;
    width: 2em;
  };
`;


import styled from "styled-components";


export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ProductContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 2em;
  text-align: left;
  font-family: 'Inter', sans-serif;
  font-style: italic;
  font-weight: 100;
  font-size: 1.5em;
  color: #4a4a4a;

  h3 {
    margin: 0 auto;
  };

  span {
    font-size: 12px;
  };
`;

export const MainProductDisplay = styled.img`
  margin-top: 1em;
  margin-left: 8em;
  height: 11em;
  width: fit-content;
`;

export const PromotionIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  margin-top: 3em;
  
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
    height: 4em;
    width: 4em;
  };

  img:nth-child(5) {
    width: 3em;
    height: 4em;
  }
`;


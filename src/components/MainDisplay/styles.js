import styled from "styled-components";

export const Container = styled.div`
  width: 90vw;
  height: 35vh;
  box-shadow: -2px 6px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 1.5em;
`;

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
  font-family: Georgia, serif;
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

export const AccessibilityIcons = styled.div`
  width: 90%;
  height: 5vh;
  margin-bottom: 1em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
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

export const Button = styled.button`
  border:none;
  background: #FF8D8D;
  box-shadow: 0px 3.00183px 3.00183px rgba(0, 0, 0, 0.25);
  border-radius: 15.544px;
  color: white;
  font-weight: 700;
  font-size: 24px;
  width: 20em;
  height: 2em;
  margin-left: 4em;
`;
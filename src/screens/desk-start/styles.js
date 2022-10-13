import styled from "styled-components";
import Vector from '../../assets/icons/vector.png'

export const Container = styled.div`
  background: linear-gradient(116.5deg, #5D6174 27.54%, rgba(81, 53, 53, 0.58) 84.67%);
  box-shadow: -2px 6px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  @media (max-width: 768px) {
    height: 50vh;
    margin-top: 50vh;
  }

`;

export const InnerContainer = styled.div`
  background: rgba(255, 255, 255, 0.18);
  box-shadow: -2px 6px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 68.16vw;
  height: 57.69vh;
  color: #FFF;
  font-family: 'Inter';
  font-style: normal;
  font-size: 10vh;
  font-weight: 500;

  @media (max-width: 768px) {
    height: 28vh;
    font-size: 5vh;
  }
`;

export const AccessibilityButton = styled.button`
  width: 8vw;
  height: 10vh;
  margin-top: 6vh;
  margin-bottom: -6vh;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px #5D6174;
  border-radius: 20px;
  background: url(${Vector}) no-repeat #FFF center;
  
  @media (max-width: 768px) {
    width: 10vw;
    height: 5vh;
    margin-top: 4vh;
    margin-bottom: -4vh;
    background-size: 3vh;
  }
`;
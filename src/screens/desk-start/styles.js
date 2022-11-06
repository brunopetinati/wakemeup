import styled from "styled-components";
import Accessibility from '../../assets/icons/accessibility.png'

export const Container = styled.div`
  background: linear-gradient(116.5deg, #5D6174 27.54%, rgba(81, 53, 53, 0.58) 84.67%);
  box-shadow: -2px 6px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 768px;
  height: 1366px;
  margin: 0 auto;
`;

export const InnerContainer = styled.div`
  background: rgba(255, 255, 255, 0.18);
  box-shadow: -2px 6px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 50%;
  color: #FFF;
  font-family: 'Inter';
  font-style: normal;
  font-size: 64px;
  font-weight: 500;
`;

export const AccessibilityButton = styled.button`
  width: 8vw;
  height: 10vh;
  margin-top: 6vh;
  margin-bottom: -6vh;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px #5D6174;
  border-radius: 20px;
  background: url(${Accessibility}) no-repeat #FFF center;
  
  @media (max-width: 768px) {
    width: 10vw;
    height: 5vh;
    margin-top: 4vh;
    margin-bottom: -4vh;
    background-size: 3vh;
  }
`;
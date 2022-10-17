import styled from "styled-components";

export const Container = styled.div`
  width: 90vw;
  height: 21.22vh;
  box-shadow: -2px 6px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProgressBarStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; 
  width: 100%;
  height: 40%;
`;


export const BiggerBallStep = styled.div`
  display: block;
  content: '';
  background: #3DD5A1;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: solid #F5F5F5 7px;
  box-shadow: 0 0 0 10px #3DD5A1;
  z-index: 2;
`;

export const SmallerBallStep = styled.div`
  display: block;
  content: '';
  background: white;
  width: 21px;
  height: 21px;
  border-radius: 50%;
  border: solid #C9C9C9 8px;
  z-index: 2;
`;

export const SmallerHighlightedBallStep = styled.div`
  display: block;
  content: '';
  background: white;
  width: 21px;
  height: 21px;
  border-radius: 50%;
  border: solid #3DD5A1 8px;
`;

export const HighlightedBarStep = styled.div`
  width: 18vw;;
  height: 10px;
  background: linear-gradient(to right, #3DD5A1, #00D28A);
  z-index: 2;
`;  


export const FadedBarStep = styled.div`
  width: 18vw;;
  height: 10px;
  background: #C9C9C9;
  z-index: 0;
`;  

export const StepIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center; 
  width: 100%;
  height: 25%;
  margin-top: 2vh;

  img {
    width: 8vw;
  }
`;

export const StepTittleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center; 
  width: 100%;
  height: 30%;
  white-space: break-spaces;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  text-shadow: 1px 2px 2px rgba(93, 97, 116, 0.25);
  color: #ABABAB;
`;  
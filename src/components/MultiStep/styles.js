import styled from "styled-components";

export const Container = styled.div`
  width: 45vw;
  height: 10vh;
  box-shadow: -2px 6px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProgressBarStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; 
  width: 100%;
  height: 40%;
  margin-left: 0.9vw;
`;


export const BiggerBallStep = styled.div`
  display: block;
  content: '';
  background: #3DD5A1;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: solid #F5F5F5 4px;
  box-shadow: 0 0 0 5px #3DD5A1;
  z-index: 2;
`;

export const SmallerBallStep = styled.div`
  display: block;
  content: '';
  background: white;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  border: solid #C9C9C9 8px;
  z-index: 2;
`;

export const SmallerHighlightedBallStep = styled.div`
  display: block;
  content: '';
  background: white;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  border: solid #3DD5A1 8px;
`;

export const HighlightedBarStep = styled.div`
  width: 9vw;;
  height: 5px;
  background: linear-gradient(to right, #3DD5A1, #00D28A);
  z-index: 2;
`;  


export const FadedBarStep = styled.div`
  width: 9vw;;
  height: 5px;
  background: #C9C9C9;
  z-index: 0;
`;  



export const StepIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center; 
  justify-self: center;
  width: 90%;
  height: 25%;
  margin-top: 1em;

  img {
    width: 4vw;
  }
`;

export const StepTittleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center; 
  text-align: center;
  width: 100%;
  height: 30%;
  white-space: break-spaces;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  text-shadow: 1px 2px 2px rgba(93, 97, 116, 0.25);
  color: #3DD5A1;
  font-size: 12px;
`;  
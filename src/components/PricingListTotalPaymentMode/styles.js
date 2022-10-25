import styled from "styled-components";

export const Container = styled.div`
  width: 48vw;
  height: 87vh;
  box-shadow: -2px 6px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  font-style: italic;
  font-family: 'Inter', sans-serif;
  font-weight: 100;
  font-size: 1.5em;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 50%;
`;

export const BlueLoading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2em;
  width: 8em;
  height: 5em;
  background: #80ABEB;
  border-radius: 21.3335px;
`;
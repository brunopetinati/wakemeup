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

  font-style: italic;
  font-weight: 400;
`;

export const InnerContainer = styled.div`
  width: 48vw;
  height: 35vh;
  background: #32D49D;
  box-shadow: -2px 6px 8px rgba(0, 0, 0, 0.25);
  border-radius: 21.2184px;
  font-weight: 300;
  font-size: 2em;
  color: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const SatisfactionContainer = styled.div`
  width: 48vw;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #5D6174;

  span {
    font-weight: 300;
    max-width: 80%;
    font-size: 1.5em;
  }
  `;

export const SmilyFaces = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  img {
    width: 3em;
  }
`;
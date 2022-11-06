import styled from "styled-components";

export const Container = styled.div`
  width: 370px;
  height: 95%;
  box-shadow: -2px 6px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;

  font-style: italic;
  font-weight: 400;
`;

export const InnerContainer = styled.div`
  width: 100%;
  height: 40%;
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
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  color: #5D6174;
  margin-top: 10em;

  span {
    font-weight: 300;
    max-width: 80%;
    font-size: 1.5em;
  }
  `;

export const SmilyFaces = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-around;

  img {
    margin-top: 10%;
    width: 3em;
  }
`;
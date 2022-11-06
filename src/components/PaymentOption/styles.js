import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 3em;
  width: 100%;
  height: 70%;

  img {
    width: 20em;
    margin-top: 9em;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 80%;

  img {
    right: 5em;
    margin-top: 5em;
  }

  span {
    font-weight: 100;
    font-size: 1.5em;
    inline-size: 15em;
    color: #000;
    text-align: center;
  };
`;
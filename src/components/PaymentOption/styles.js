import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    position: relative;
    right: 5em;
    margin-top: 1em;
  }

  span {
    position: relative;
    right: 2em;
    margin-top: 2em;
    margin-bottom: 2em;
    font-family: 'Inter', sans-serif;
    font-style: italic;
    font-weight: 100;
    font-size: 1.5em;
    inline-size: 15em;
    color: #000;
  };
`;
import styled from "styled-components";

export const Container = styled.div`
  width: 90vw;
  height: 25vh;
  box-shadow: -2px 6px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background: #8AFFD6;
  display: flex;
  flex-direction: column;
  align-items: center;

  font-style: italic;
  font-weight: 400;
`;

export const Header = styled.div`
  width: 100%;
  height: 3em;
  background: #5D6174;
  margin-top: 1em;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 1.7em;
    margin-left: 2em;
    margin-right: 2em;
  }
`;

export const Button = styled.button`
  border: none;
  background: #32D49D;
  width: 20em;
  height: 3em;
  box-shadow: -2px 6px 8px rgba(0, 0, 0, 0.25);
  border-radius: 21.2184px;
  margin-top: 1.5em;
  color: white;
  font-size: 16px;
  font-weight: 400;
`;
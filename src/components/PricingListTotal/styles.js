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

export const GreenButtonModal = styled.button`
  border: none;
  box-shadow: 0px 3.07373px 3.07373px rgba(0, 0, 0, 0.25);
  border-radius: 15.9163px;
  width: 17em;
  height: 8em;
  background: #3DD5A1;
  color: white;
  font-family: Georgia, serif;
  font-style: italic;
  font-weight: 100;
  font-size: 1.5em;
`;

export const BlueButtonModal = styled.button`
  border: none;
  box-shadow: 0px 3.07373px 3.07373px rgba(0, 0, 0, 0.25);
  border-radius: 15.9163px;
  width: 17em;
  height: 8em;
  background: #6591C5;
  color: white;
  font-family: Georgia, serif;
  font-style: italic;
  font-weight: 100;
  font-size: 1.5em;
`;
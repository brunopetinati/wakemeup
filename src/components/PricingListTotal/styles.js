import styled from "styled-components";

export const Container = styled.div`
  width: 370px;
  height: 95%;
  box-shadow: -2px 6px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background: #8AFFD6;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;

  font-style: italic;
  font-weight: 400;
`;

export const MaxItensContainer = styled.div`
  height: 75%;
`;

export const TotalInfoDisplay = styled.div`
  height: 7%;
  width: 90%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  color: #5D6174;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: initial;
  justify-content: space-around;

  div {
    display: flex;
    flex-direction: row;
    align-items: initial;
    justify-content: space-between;
  }
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
  width: 14em;
  height: 4em;
  box-shadow: -2px 6px 8px rgba(0, 0, 0, 0.25);
  border-radius: 21.2184px;
  color: white;
  font-size: 24px;
  font-weight: 300;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const WaitingPayment = styled.button`
  border: none;
  background: #32D49D;
  width: 90%;
  height: 20%;
  box-shadow: -2px 6px 8px rgba(0, 0, 0, 0.25);
  border-radius: 21.2184px;
  color: white;
  font-size: 24px;
  font-weight: 300;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 14%;

  p {
    max-width: 7em;
  }
`;

export const GreenButtonModal = styled.button`
  border: none;
  box-shadow: 0px 3.07373px 3.07373px rgba(0, 0, 0, 0.25);
  border-radius: 15.9163px;
  width: 17em;
  height: 8em;
  background: #3DD5A1;
  color: white;
  font-family: 'Inter', sans-serif;
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
  font-family: 'Inter', sans-serif;
  font-style: italic;
  font-weight: 100;
  font-size: 1.5em;
`;
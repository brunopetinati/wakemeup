import styled from "styled-components";

export const Container = styled.div`
  width: 48vw;
  height: 87vh;
  box-shadow: -2px 6px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background: #FFF;
  display: flex;
  flex-direction: column;
`;

export const PricingListHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 3em;
  background: #5D6174;
  border-radius: 20px 20px 0px 0px;

  span {
    font-family: 'Inter', sans-serif;
    font-weight: 100;
    font-size: 1.3em;
    color: white;
  };
`;

export const TableContainer = styled.div`
  display:flex;
  flex-direction: column;
  height: 40vh;
  overflow: scroll;
`;

export const InnerContainer = styled.div``;

export const InnerFirstSelection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24vh;
`;

export const MiniCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: #F5F5F5;
  box-shadow: 0px 2.99069px 2.99069px rgba(0, 0, 0, 0.25);
  border-radius: 15.9505px;
  height: 6em;
  width: 90%;

  img {
    width: 2em;
  };
`;

export const MiniCardInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 10em;
  margin-left: 2em;

  span {
    font-size: 30px;
  }
`;

export const InnerSecondSelection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
  width: 100%;
  height: 50%;
`;

export const TotalBar = styled.div`
  background: #F5F5F5;
  box-shadow: 0px 2.99069px 2.99069px rgba(0, 0, 0, 0.25);
  width: 80%;
  height: 4em;
  border-radius: 15.8644px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1em;

  img {
    width: 20px;
  }
`;

export const Button = styled.button`
  margin-top: 1em;
  background: #3DD5A1;
  box-shadow: 0px 2.99069px 2.99069px rgba(0, 0, 0, 0.25);
  border: none;
  width: 90%;
  height: 7em;
  border-radius: 15.8644px;
  color: white;
  font-weight: 700;
`;

export const PaymentMethod = styled.div`
  display: block;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 60%;

  img {
    width: 50%;
    height: 50%;
  };
`;

export const ButtonModal = styled.button`
  border: none;
  background: #FF8D8D;
  box-shadow: 0px 3.07373px 3.07373px rgba(0, 0, 0, 0.25);
  border-radius: 15.9163px;
  width: 30em;
  height: 4em;
  color: white;
`;
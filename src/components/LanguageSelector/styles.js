import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 120px;
  width: 768px;
  background: #F5F5F5;
`;


export const InnerContainer = styled.div`
  height: 100px;
  width: 738px;
  box-shadow: -2px 6px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background: #FFF;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 0 auto;

  img {
    margin-left: 2em;
    height: 1em;
  }

  div {
    display: flex;
    margin-right: 2em;
  }
`;
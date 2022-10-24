import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  height: 1em;
  margin-top: 1em;
`;

export const ProductName = styled.span`
  margin-left: 2em;
  font-style: italic;
  font-family: 'Inter', sans-serif;
  font-weight: 200;
  width: 60%;
  height: 3em;
  font-size: 14px;
`;

export const PriceDisplay = styled.div`
  width:20%;
  margin-left: 1em;
  font-weight: 450;
`;

export const Icon = styled.img``;
import styled from "styled-components";
import Positive from '../../assets/icons/+.png'
import Negative from '../../assets/icons/-.png'


export const ButtonsBagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 80%;
`;


export const GreenButtonBag = styled.button`
  width:5em;
  height:5em;
  border-radius: 0.5em;
  border: none;
  background: url(${Positive}) no-repeat #73E0BA center;
  background-size: 1em;
`;

export const ZeroButtonBag = styled.div`
  display: flex;
  border: none;
  background: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:5em;
  height:5em;
  font-size: xxx-large;
  ;
`;

export const RedButtonBag = styled.button`
  width:5em;
  height:5em;
  border-radius: 0.5em;
  border: none;
  background: url(${Negative}) no-repeat #FF8D8D center;
  background-size: 1em;
`;
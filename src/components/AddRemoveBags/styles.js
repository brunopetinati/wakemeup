import styled from "styled-components";
import Positive from '../../assets/icons/+.png'
import Return from '../../assets/icons/return.png'
import Negative from '../../assets/icons/-.png'


export const ButtonsBagContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin-top: 2%;
`;


export const GreenButtonBag = styled.button`
  width:2em;
  height:2em;
  border-radius: 0.5em;
  border: none;
  background: url(${Positive}) no-repeat #73E0BA center;
  background-size: 1em;
`;

export const ZeroButtonBag = styled.button`
  width:2em;
  height:2em;
  border-radius: 0.5em;
  border: none;
  margin-top: 25%;
  margin-bottom: 25%;
  background: url(${Return}) no-repeat #FBFBFB center;
  background-size: 1em;
  ;
`;

export const RedButtonBag = styled.button`
  width:2em;
  height:2em;
  border-radius: 0.5em;
  border: none;
  background: url(${Negative}) no-repeat #FF8D8D center;
  background-size: 1em;
`;
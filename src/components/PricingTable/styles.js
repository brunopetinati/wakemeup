import styled from "styled-components";
import Positive from '../../assets/icons/+.png'
import Return from '../../assets/icons/return.png'
import Negative from '../../assets/icons/-.png'


export const Container = styled.div`
  width: 90vw;
  height: 25vh;
  box-shadow: -2px 6px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    margin-top: 1em;
    font-family: Georgia, serif;
    font-style: italic;
    font-weight: 100;
    font-size: 1.5em;
    color: #4a4a4a;
  }
`;

export const InnerContainer = styled.div``;

export const InnerFirstSelection = styled.div``;

export const InnerSecondSelection = styled.div``;

export const PricingListHeader = styled.div`
  width: 50%;
  height: 3em;
  background: #5D6174;
  border-radius: 20px 20px 0px 0px;
`;
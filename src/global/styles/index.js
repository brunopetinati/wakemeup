import styled from "styled-components";

export const AdvertiseContainer = styled.div`
  height: 50vh;
  display:none;

  @media (max-width: 768px) {
    height: 50vh;
    display: flex;
  }
`;

export const MainContainer = styled.div`
  background: #F5F5F5;
  width: 100vw;
  height: 100vh;

  @media (max-width: 768px) {
    height: 50vh;
  }
`;
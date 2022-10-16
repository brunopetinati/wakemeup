import styled from "styled-components";


// futuramente, para acessibilidade
export const AdvertiseContainer = styled.div`
  height: 50vh;
  display:none;

  @media (max-width: 768px) {
    height: 50vh;
    display: flex;
  }
`;

export const MainContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  background: #F5F5F5;
  padding-top: 1em;
  width: 100vw;
  height: 100vh;
`;
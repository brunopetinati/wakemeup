import styled from "styled-components";


// TO DO: acessibilidade
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

export const globalModal = {
  content: {
    top:'50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 400,
    backgroundColor: 'green',
    borderRadius: '3%'
  }
}

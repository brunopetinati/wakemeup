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

  @media (min-width: 769px) {
    height: 200vh;
  }
`;

export const globalModal = {
  content: {
    top:'50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '40.5em',
    height: '55em',
    backgroundColor: '#9d9d9d',
    borderRadius: '3%'
  }
}

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-family: Georgia, serif;
  font-style: italic;
  font-weight: 100;
  font-size: 1.5em;
  color: #F5F5F5;
  height: 90%;
  text-align: center;
`;

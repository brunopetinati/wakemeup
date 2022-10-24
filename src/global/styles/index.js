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
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  background: #F5F5F5;
  width: 100vw;
  height: 100vh;
`;

export const InnerContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  width 50vw;
  height: 90vh;
`;

export const MarginRightContainer = styled.div`
  margin-right: 3vw;
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
    borderRadius: '3%',
    zIndex: '10'
  }
}

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-family: 'Inter', sans-serif;
  font-style: italic;
  font-weight: 100;
  font-size: 1.5em;
  color: #F5F5F5;
  height: 90%;
  text-align: center;
  z-index: 5;
`;

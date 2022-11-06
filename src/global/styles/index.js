import styled from "styled-components";


export const MainContainer = styled.div`
  display:flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  background: #F5F5F5;
  width: 768px;
  height: 1246px;
  margin: 0 auto;
`;

export const InnerContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 95%;
  margin-top: 1em;
  `;

export const MarginRightContainer = styled.div`
  margin-right: 3vw;
  height: 100%;
  width: 100%;
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
`;

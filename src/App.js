import AppRoutes from "./routes"
import Modal from 'react-modal'
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import LanguageSelector from './components/LanguageSelector';
import { useSelector } from "react-redux";

Modal.setAppElement('#root')


function App() {

  const step = useSelector((state) => state.step);
  const payment = useSelector((state) => state.payment)
  console.log('step', step)
  console.log('payment', payment)

  return (
    <GlobalContainer>
      <LanguageSelector />
      <GlobalStyle />
      <AppRoutes />
    </GlobalContainer>
  );
}


const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
    font-weight: 100;
  }
`;

const GlobalContainer = styled.div`
  width: 768px;
  margin: 0 auto;
`;

export default App;


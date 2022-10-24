import AppRoutes from "./routes"
import Modal from 'react-modal'
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
    <>
      {step === 1 && <LanguageSelector />}
      <GlobalStyle />
      <AppRoutes />
    </>
  );
}


const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
    font-weight: 100;
  }
`;

export default App;


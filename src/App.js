import AppRoutes from "./routes"
import Modal from 'react-modal'
import { createGlobalStyle } from 'styled-components';
import LanguageSelector from './components/LanguageSelector';
import { useSelector } from "react-redux";

Modal.setAppElement('#root')


function App() {

  document.title = "Wake Me Up"
  const step = useSelector((state) => state.step);
  console.log(step)

  return (
    <>
      {step != '' && <LanguageSelector />}
      <GlobalStyle />
      <AppRoutes />
    </>
  );
}


const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
  }
`;

export default App;


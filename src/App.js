import AppRoutes from "./routes"
import Modal from 'react-modal'
import { createGlobalStyle } from 'styled-components';
import LanguageSelector from './components/LanguageSelector';
import { MainContainer } from './global/styles/index';

Modal.setAppElement('#root')


function App() {
  document.title = "Wake Me Up"
  
  return (
    <>
      <LanguageSelector />
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


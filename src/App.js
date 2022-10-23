import AppRoutes from "./routes"
import Modal from 'react-modal'
import { createGlobalStyle } from 'styled-components';

Modal.setAppElement('#root')


function App() {
  document.title = "Wake Me Up"
  
  return (
    <>
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


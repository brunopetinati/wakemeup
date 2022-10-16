import AppRoutes from "./routes"
import Modal from 'react-modal'

Modal.setAppElement('#root')


function App() {
  document.title = "Wake Me Up"
  
  return (
      <AppRoutes />
  );
}

export default App;
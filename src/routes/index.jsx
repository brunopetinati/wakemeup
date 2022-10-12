import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

import BenVenuto from '../screens/desk-start'


const AppRoutes = () => {

  return (
    <AnimatePresence>      
        <Routes>
          <Route exact path="/home" element={<div></div>}/>
          <Route exact path="/" element={<BenVenuto />}/>
          <Route exact path="/create_account" element={<div></div>}/>
        </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
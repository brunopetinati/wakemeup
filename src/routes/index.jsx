import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

import BenVenuto from '../screens/desk-start'
import Desk_1_Init from '../screens/desk-1/index'


const AppRoutes = () => {

  return (
    <AnimatePresence>      
        <Routes>
          <Route exact path="/desk-1-init" element={<Desk_1_Init />}/>
          <Route exact path="/" element={<BenVenuto />}/>
          <Route exact path="/create_account" element={<div></div>}/>
        </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
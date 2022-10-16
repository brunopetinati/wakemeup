import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

import BenVenuto from '../screens/desk-start'
import DESK_1_INIT from '../screens/desk-1/index'


const AppRoutes = () => {

  return (
    <AnimatePresence>      
        <Routes>
          <Route exact path="/desk-1-init" element={<DESK_1_INIT />}/>
          <Route exact path="/" element={<BenVenuto />}/>
        </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
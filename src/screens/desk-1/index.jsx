import { motion } from "framer-motion";
import { MainContainer } from '../../global/styles/index'
import MultiStepForm from '../../components/MultiStep';
import LotteriaDegliScontrini from '../../components/LotteriaDegliScontrini';
import BagsController from '../../components/BagsController';
import ScanItemBarcode from '../../components/ScanItemsBarcode';


const DESK_1_INIT = () => {
  return (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8 }}
  >
    <MainContainer>
      <MultiStepForm />
      <LotteriaDegliScontrini />
      <BagsController />
      <ScanItemBarcode />
    </MainContainer>
  </motion.div>
  )
};

export default DESK_1_INIT;
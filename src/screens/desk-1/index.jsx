import { motion } from "framer-motion";
import { MainContainer } from '../../global/styles/index'
import MultiStepForm from '../../components/MultiStep';
import LotteriaDegliScontrini from '../../components/LotteriaDegliScontrini';
import BagsController from '../../components/BagsController';
import ScanItemBarcode from '../../components/ScanItemsBarcode';


const Desk_1_Init = () => {
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

export default Desk_1_Init;
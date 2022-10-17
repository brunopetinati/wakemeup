import { motion } from "framer-motion";
import { MainContainer } from '../../../global/styles/index'
import MultiStepForm from '../../../components/MultiStep'
import LotteriaDegliScontrini from '../../../components/LotteriaDegliScontrini';
import PricingList from '../../../components/PricingList';
import MainDisplay from '../../../components/MainDisplay';


const DESK_2_SCANNER = () => {
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
      <PricingList />
      <MainDisplay />
    </MainContainer>
  </motion.div>
  )
};

export default DESK_2_SCANNER;
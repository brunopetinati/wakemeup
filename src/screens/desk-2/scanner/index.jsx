import { motion } from "framer-motion";
import { MainContainer } from '../../../global/styles/index'
import MultiStepForm from '../../../components/MultiStep'
import LotteriaDegliScontrini from '../../../components/LotteriaDegliScontrini';
import PricingTable from '../../../components/PricingTable';
import ProductDisplay from '../../../components/ProductDisplay';


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
      <PricingTable />
      <ProductDisplay />
    </MainContainer>
  </motion.div>
  )
};

export default DESK_2_SCANNER;
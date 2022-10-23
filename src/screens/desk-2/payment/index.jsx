import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { MainContainer, InnerContainer, MarginRightContainer } from '../../../global/styles/index'
import MultiStepForm from '../../../components/MultiStep'
import LotteriaDegliScontrini from '../../../components/LotteriaDegliScontrini';
import PricingListTotal from '../../../components/PricingListTotal';
import PricingListPaymentMode from '../../../components/PricingListTotalPaymentMode'
import MainDisplay from '../../../components/MainDisplay';


const DESK_2_PAYMENT = () => {

  const step = useSelector((state) => state.step);
  const payment = useSelector((state) => state.payment);

  return (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8 }}
  >
    <MainContainer>
      <InnerContainer>
        <MultiStepForm />
        <LotteriaDegliScontrini />
        <MainDisplay />
      </InnerContainer>
      <MarginRightContainer>
        {step === 3 ? <PricingListPaymentMode /> : step === 4 ? <PricingListPaymentMode doubleMessage={true} /> : <PricingListTotal /> }
      </MarginRightContainer>
    </MainContainer>
  </motion.div>
  )
};

export default DESK_2_PAYMENT;
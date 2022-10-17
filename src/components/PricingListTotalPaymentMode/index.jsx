import { motion } from "framer-motion";
import { Container, BlueLoading, InnerContainer } from './styles';


const PricingListTotalPaymentMode = ({doubleMessage = false}) => {

  return (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8 }}
    >
    <Container>
      {doubleMessage ? <InnerContainer><BlueLoading>Grazie</BlueLoading><BlueLoading>ricerca di sottisfazione</BlueLoading></InnerContainer>: <BlueLoading>Attendere mentre stiamo processando il pagamento</BlueLoading>}
    </Container>
  </motion.div>
  )
};

export default PricingListTotalPaymentMode;
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Container, InnerContainer, AccessibilityButton } from './styles'

const BenVenuto = () => {

  const navigate = useNavigate(); 

  return(
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 2 }}
  >
    <Container>
      <InnerContainer onClick={() => navigate('/desk-1-init')}>benvenuto</InnerContainer>
      <AccessibilityButton />
    </Container>
  </motion.div>)
};

export default BenVenuto;
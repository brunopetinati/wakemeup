import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Container, InnerContainer, AccessibilityButton } from './styles'
import { nextStep } from "../../store/modules/step/actions";
import { useDispatch, useSelector } from "react-redux";



const BenVenuto = () => {

  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const step = useSelector((state) => state.step)

  const handleClick = () => {
    dispatch(nextStep());
    navigate('/desk-1-init');
  };


  return(
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 2 }}
  >
    <Container>
      <InnerContainer onClick={() => handleClick()}>benvenuto</InnerContainer>
      <AccessibilityButton />
    </Container>
  </motion.div>)
};

export default BenVenuto;
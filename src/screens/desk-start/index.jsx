import { useNavigate } from "react-router-dom";
import { Container, InnerContainer, AccessibilityButton } from './styles'

const BenVenuto = () => {

  const navigate = useNavigate(); 

  return(
  <Container>
    <InnerContainer onClick={() => navigate('/desk-1-init')}>benvenuto</InnerContainer>
    <AccessibilityButton />
  </Container>)
};

export default BenVenuto;
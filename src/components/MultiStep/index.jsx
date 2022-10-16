import { Container, BiggerBallStep, SmallerBallStep, ProgressBarStyle, FadedBarStep, StepTittleContainer, StepIconsContainer  } from './styles';
import Scanbarcode from '../../assets/icons/scanbarcode.png' 
import Paymentopt from '../../assets/icons/paymentopt.png' 
import Payment from '../../assets/icons/payment.png' 
import Transactioncomplete from '../../assets/icons/transactioncomplete.png' 


 
const MultiStepForm = () => {

  const titles = ['Scan Barcode', 'Payment \n Option', 'Payment', 'Transaction \n Complete']
  const icons = [ Scanbarcode, Paymentopt, Payment, Transactioncomplete]

  return (
  <Container>
    <StepIconsContainer>
      {icons.map((icon, index) => <img src={icon} key={index} alt=""/>)}
    </StepIconsContainer>
    <ProgressBarStyle>
      <BiggerBallStep />
      <FadedBarStep />
      <SmallerBallStep />
      <FadedBarStep />
      <SmallerBallStep />
      <FadedBarStep />
      <SmallerBallStep />
    </ProgressBarStyle>
    <StepTittleContainer>
      {titles.map((title, index) => <div key={index}>{title}</div>)}
    </StepTittleContainer>
  </Container>)
};

export default MultiStepForm;
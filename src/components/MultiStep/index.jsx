import { useState } from "react";
import { Container, BiggerBallStep, SmallerBallStep, ProgressBarStyle, HighlightedBarStep, FadedBarStep, SmallerHighlightedBallStep, StepTittleContainer, StepIconsContainer  } from './styles';
import Scanbarcode from '../../assets/icons/scanbarcode.png' 
import Paymentopt from '../../assets/icons/paymentopt.png' 
import Payment from '../../assets/icons/payment.png' 
import Transactioncomplete from '../../assets/icons/transactioncomplete.png' 


 
const MultiStepForm = () => {

  const [step, setStep] = useState(50);
  const titles = ['Scan Barcode', 'Payment \n Option', 'Payment', 'Transaction \n Complete']
  const icons = [ Scanbarcode, Paymentopt, Payment, Transactioncomplete]

  return (
  <Container>
    <StepIconsContainer>
      {icons.map((icon) => <img src={icon}/>)}
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
      {titles.map((title) => <div>{title}</div>)}
    </StepTittleContainer>
  </Container>)
};

export default MultiStepForm;
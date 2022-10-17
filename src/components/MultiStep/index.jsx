import { useSelector } from "react-redux";
import { Container, BiggerBallStep, SmallerBallStep, ProgressBarStyle, FadedBarStep, SmallerHighlightedBallStep, HighlightedBarStep, StepTittleContainer, StepIconsContainer  } from './styles';
import Scanbarcode from '../../assets/icons/scanbarcode.png' 
import Paymentopt from '../../assets/icons/paymentopt.png' 
import Payment from '../../assets/icons/payment.png' 
import Transactioncomplete from '../../assets/icons/transactioncomplete.png' 

 
const MultiStepForm = () => {

  const step = useSelector((state) => state.step);
  const titles = ['Scan Barcode', 'Payment \n Option', 'Payment', 'Transaction \n Complete']
  const icons = [ Scanbarcode, Paymentopt, Payment, Transactioncomplete]

  
  const ShowStep = () => {
    if(step === 1) {
      return (
        <ProgressBarStyle>
          <BiggerBallStep />
          <FadedBarStep />
          <SmallerBallStep />
          <FadedBarStep />
          <SmallerBallStep />
          <FadedBarStep />
          <SmallerBallStep />
        </ProgressBarStyle>
        );
    } else {
      if(step === 2) {
        return (
          <ProgressBarStyle>
              <BiggerBallStep />
              <HighlightedBarStep />
              <SmallerHighlightedBallStep />
              <FadedBarStep />
              <SmallerBallStep />
              <FadedBarStep />
              <SmallerBallStep />
          </ProgressBarStyle>)
      };
    };
  };

  return (
  <Container>
    <StepIconsContainer>
      {icons.map((icon, index) => <img src={icon} key={index} alt=""/>)}
    </StepIconsContainer>
    <ShowStep />
    <StepTittleContainer>
      {titles.map((title, index) => <div key={index}>{title}</div>)}
    </StepTittleContainer>
  </Container>)
};

export default MultiStepForm;
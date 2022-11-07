import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, BiggerBallStep, SmallerBallStep, ProgressBarStyle, FadedBarStep, SmallerHighlightedBallStep, HighlightedBarStep, StepTittleContainer, StepIconsContainer, StyledIcon  } from './styles';
import Scanbarcode from '../../assets/icons/barcode.svg' 
import Paymentopt from '../../assets/icons/controles.svg' 
import Payment from '../../assets/icons/cartao.svg' 
import Transactioncomplete from '../../assets/icons/transationcomplete.svg' 

 
const MultiStepForm = () => {

  const step = useSelector((state) => state.step);
  const titles = ['Scannerizza i prodotti', 'Schegli il tipo di Pagamento', 'Effetuare il pagamento', 'Transazione eseguita']
  const icons = [ Scanbarcode, Paymentopt, Payment, Transactioncomplete]

  useEffect(()=>{},[step])
  
  const ShowStep = () => {
    if(step === 1 || step === 2) {
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
    } else if (step === 3) {
        return (
          <ProgressBarStyle>
              <BiggerBallStep />
              <HighlightedBarStep />
              <SmallerHighlightedBallStep />
              <FadedBarStep />
              <SmallerBallStep />
              <FadedBarStep />
              <SmallerBallStep />
          </ProgressBarStyle>
        );
    } else if (step === 4) {
        return (
          <ProgressBarStyle>
              <BiggerBallStep />
              <HighlightedBarStep />
              <SmallerHighlightedBallStep />
              <HighlightedBarStep />
              <SmallerHighlightedBallStep />
              <FadedBarStep />
              <SmallerBallStep />
          </ProgressBarStyle>
        );
      } else { 
        return (
          <ProgressBarStyle>
              <BiggerBallStep />
              <HighlightedBarStep />
              <SmallerHighlightedBallStep />
              <HighlightedBarStep />
              <SmallerHighlightedBallStep />
              <HighlightedBarStep />
              <SmallerHighlightedBallStep />
          </ProgressBarStyle>
        );
      };
    };


  return (
  <Container>
    <StepIconsContainer>
      {icons.map((icon, index) => <StyledIcon src={icon} key={index} active={true} alt=""/>)}
    </StepIconsContainer>
    <ShowStep />
    <StepTittleContainer>
      {titles.map((title, index) => <div key={index}>{title}</div>)}
    </StepTittleContainer>
  </Container>)
};

export default MultiStepForm;
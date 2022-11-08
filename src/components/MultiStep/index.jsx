import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, BiggerBallStep, SmallerBallStep, ProgressBarStyle, FadedBarStep, SmallerHighlightedBallStep, HighlightedBarStep, StepTittleContainer, StepIconsContainer, StyledIcon, ColorTitle  } from './styles';
import { ReactComponent as Scanbarcode } from '../../assets/icons/barcode.svg' 
import { ReactComponent as Paymentopt } from '../../assets/icons/controles.svg' 
import { ReactComponent as Payment } from '../../assets/icons/cartao.svg' 
import { ReactComponent as Transactioncomplete }from '../../assets/icons/transationcomplete.svg' 

 
const MultiStepForm = () => {

  const step = useSelector((state) => state.step);
  const titles = ['Scannerizza i prodotti', 'Schegli il tipo di Pagamento', 'Effetuare il pagamento', 'Transazione eseguita']
  const icons = [ <Scanbarcode />, <Paymentopt />, <Payment />, <Transactioncomplete />]

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


    const LightUpStepIcon = () => {
      if (step === 1 || step === 2) {
        return (
          <>
            <Scanbarcode fill="#3DD5A1" style={{scale: "0.7"}}/>
            <Paymentopt fill="#CDCDCD" style={{scale: "0.7"}}/>
            <Payment fill="#CDCDCD" style={{scale: "0.7"}}/>
            <Transactioncomplete fill="#CDCDCD" style={{scale: "0.7", marginLeft: "10px"}}/>
          </>
        )
      } else if (step === 3) {
        return (
          <>
            <Scanbarcode fill="#3DD5A1" style={{scale: "0.7"}}/>
            <Paymentopt fill="#3DD5A1" style={{scale: "0.7"}}/>
            <Payment fill="#CDCDCD" style={{scale: "0.7"}}/>
            <Transactioncomplete fill="#CDCDCD" style={{scale: "0.7", marginLeft: "10px"}}/>
          </>
        )
      } else if (step === 4) {
        return (
          <>
            <Scanbarcode fill="#3DD5A1" style={{scale: "0.7"}}/>
            <Paymentopt fill="#3DD5A1" style={{scale: "0.7"}}/>
            <Payment fill="#3DD5A1" style={{scale: "0.7"}}/>
            <Transactioncomplete fill="#CDCDCD" style={{scale: "0.7", marginLeft: "10px"}}/>
          </>
        )
      } else {
        return (
          <>
            <Scanbarcode fill="#3DD5A1" style={{scale: "0.7"}}/>
            <Paymentopt fill="#3DD5A1" style={{scale: "0.7"}}/>
            <Payment fill="#3DD5A1" style={{scale: "0.7"}}/>
            <Transactioncomplete fill="#3DD5A1" style={{scale: "0.7", marginLeft: "10px"}}/>
          </>
        )
      }
    };

    const StepTitle = ({key, text, color}) => {
      return <ColorTitle key={key} color={color}>{text}</ColorTitle>
    }

    const LightUpStepTitle = () => {
      if (step === 1 || step === 2) {
        return (
          <>
            <StepTitle text={'Scannerizza i prodotti'} color={true} />
            <StepTitle text={'Schegli il tipo di Pagamento'} color={false} />
            <StepTitle text={'Effetuare il pagamento'} color={false} />
            <StepTitle text={'Transazione eseguita'} color={false} />
          </>
        )
      } else if (step === 3) {
        return (
          <>
            <StepTitle text={'Scannerizza i prodotti'} color={true} />
            <StepTitle text={'Schegli il tipo di Pagamento'} color={true} />
            <StepTitle text={'Effetuare il pagamento'} color={false} />
            <StepTitle text={'Transazione eseguita'} color={false} />
          </>
        )
      } else if (step === 4) {
        return (
          <>
            <StepTitle text={'Scannerizza i prodotti'} color={true} />
            <StepTitle text={'Schegli il tipo di Pagamento'} color={true} />
            <StepTitle text={'Effetuare il pagamento'} color={true} />
            <StepTitle text={'Transazione eseguita'} color={false} />
          </>
        )
      } else {
        return (
          <>
            <StepTitle text={'Scannerizza i prodotti'} color={true} />
            <StepTitle text={'Schegli il tipo di Pagamento'} color={true} />
            <StepTitle text={'Effetuare il pagamento'} color={true} />
            <StepTitle text={'Transazione eseguita'} color={true} />
          </>
        )
      }
    }

  return (
  <Container>
    <StepIconsContainer>
      <LightUpStepIcon />
    </StepIconsContainer>
    <ShowStep />
    <StepTittleContainer>
      <LightUpStepTitle />
    </StepTittleContainer>
  </Container>)
};

export default MultiStepForm;
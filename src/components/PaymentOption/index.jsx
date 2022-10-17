import { useDispatch, useSelector } from "react-redux";
import { Container, InnerContainer, Button } from './styles'
import { nextStep } from "../../store/modules/step/actions";
import { paymentSuccessful } from "../../store/modules/payment/actions";
import Bancomat from '../../assets/icons/bancomat-cut.png'
import BancoFedelta from '../../assets/icons/bancofedelta.png'
import CarteRegalo from '../../assets/icons/carteregalo.png'
import Satispay from '../../assets/icons/satispay.png'
import Paymachine from '../../assets/icons/paymachine.png'
import Continue from '../../assets/icons/continue.png'

const PaymentOption = () => {

  const payment = useSelector((state) => state.payment);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(nextStep());
    dispatch(paymentSuccessful());
  };

  return (
    <Container>
      <InnerContainer>
      <img src={Continue} alt="" />
      {payment === 'confirming' ? <span>Inserire la carta quando l’ importo sia visibile sul pos.</span> : payment === 'success' ? <span>Ritirare il scontrino di uscita e fai leggere il codice di barre sul totem alla porta</span> : <span>Pagamento con Carte o Bancomat</span>}
      </InnerContainer>
      {payment === 'confirming' ? <img src={Paymachine} alt="" width={'45%'} onClick={() => handleClick()}/> : payment === 'success' ? <div></div> : <img src={Bancomat} alt="" />}
    </Container>
  )
};

export default PaymentOption;
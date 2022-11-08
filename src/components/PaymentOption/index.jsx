import { useDispatch, useSelector } from "react-redux";
import { Container, InnerContainer, Button } from './styles'
import { nextStep } from "../../store/modules/step/actions";
import { paymentSuccessful } from "../../store/modules/payment/actions";
import Bancomat from '../../assets/icons/bancomat.png'
import BancoFedelta from '../../assets/icons/bancofedelta.png'
import CarteRegalo from '../../assets/icons/carteregalo.png'
import Satispay from '../../assets/icons/satispay.png'
import Paymachine from '../../assets/icons/paymachine.png'
import Continue from '../../assets/icons/continue.png'

const PaymentOption = () => {

  const payment = useSelector((state) => state.payment);
  const dispatch = useDispatch();


  return (
    <Container>
      <InnerContainer>
      {/* <img src={Continue} alt="" /> */}
      {payment === 'confirming' ? <span>Inserire la carta quando l’ importo sia visibile sul pos.</span> : payment === 'success' ? <span>Ritirare il scontrino di uscita e fai leggere il codice di barre sul totem alla porta</span> : payment === 'credit_card' ? <span>Pagamento con Buono</span> : payment === 'buono_fedelta' ? <span>Pagamento con Buono Fedelta</span> : payment === 'satispay' ? <span>Pagamento con Satispay</span> : payment === 'gift_card' ? <span>Pagamento con Carte Regalo e Reso</span> : <span>Pagamento con Carte o Bancomat</span>}
      </InnerContainer>
      {payment === 'confirming' ? <img src={Paymachine} alt="" width={'45%'} /> : payment === 'success' ? <div></div> : payment === 'credit_card' ? <img src={Bancomat} alt="" width={'5px'}/> : payment === 'buono_fedelta' ? <img src={BancoFedelta} alt="" /> : payment === 'satispay' ? <img src={Satispay} alt="" /> : payment === 'gift_card' ? <img src={CarteRegalo} alt="" /> : <img src={Paymachine} alt="" />}
    </Container>
  )
};

export default PaymentOption;
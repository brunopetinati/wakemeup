import { useDispatch, useSelector } from "react-redux";
import { Container, InnerContainer, Button } from './styles'
import Bancomat from '../../assets/icons/bancomat-cut.png'
import BancoFedelta from '../../assets/icons/bancofedelta.png'
import CarteRegalo from '../../assets/icons/carteregalo.png'
import Satispay from '../../assets/icons/satispay.png'
import Continue from '../../assets/icons/continue.png'

const PaymentOption = () => {

  const payment = useSelector((state) => state.payment);

  return (
    <Container>
      <InnerContainer>
      <img src={Continue} alt="" />
      <span>Pagamento con Carte o Bancomat</span>
      </InnerContainer>
      <img src={Bancomat} alt="" />
    </Container>
  )
};

export default PaymentOption;
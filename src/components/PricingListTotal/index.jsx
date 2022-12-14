import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { nextStep } from '../../store/modules/step/actions';
import { confirming, paymentSuccessful } from '../../store/modules/payment/actions';
import ProductDetail from '../ProductDetail';
import { Container, Header, Button, GreenButtonModal, BlueButtonModal, MaxItensContainer, TotalInfoDisplay, WaitingPayment } from './styles';
import Cart from '../../assets/icons/white-cart.png';
import Modal from 'react-modal';
import { globalModal, ModalContainer } from '../../global/styles/index';
import x from '../../assets/icons/times.svg'


const PricingListTotal = () => {
  // TO DO: pensar em como importar a lista para esse componente. Provavelmente redux.
  // TO DO: resolver lista grande com scroll no css

  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  const products = ['logo printed shorts', 'sweat-shirt à fermeture éclair', 'Napolina Tagliatelle', 'Adina Latte', 'Coca Cola', 'logo printed crispy nylon swim shorts']
  const [modal, showModal] = useState(false);
  const step = useSelector((state) => state.step);
  const payment = useSelector((state) => state.payment);
  const bags = useSelector((state) => state.bags);

  const handleToggle = () => {
    showModal(!modal);
  };

  const handleNavigation = () => {
    handleToggle();
    dispatch(nextStep());
    dispatch(confirming());
    navigate('/desk-2-payment')
  };

  const paymentSuccessfull = () => {
    dispatch(nextStep());
    dispatch(paymentSuccessful());
  };


  return (
  <>
    <Container>
      <Header><img src={Cart} alt="" />6 articoli</Header>
      <MaxItensContainer>
        {products.map((product, index) => <ProductDetail productName={product} key={index}/>)}
      </MaxItensContainer>
      <TotalInfoDisplay>
        <div>
          <span>ADDEBITO BORSE DI PLASTICA</span>
          <span>{bags === 1 ? <span>1 borsa</span> : <span>{bags} borsas</span>}</span>
          <span>€ 0.15</span>
        </div>
        <div>
          <span>TOTALE ARTICOLI</span>
          <span>€ 130.50</span>
        </div>
      </TotalInfoDisplay>
      {step === 4 ? <WaitingPayment onClick={() => paymentSuccessfull()}><p>Attendere mentre stiamo processando il pagamento</p></WaitingPayment> : <Button onClick={() => handleToggle()}>PAGARE <strong>€ 130.65</strong></Button>}
    </Container>
    <Modal
      isOpen={modal}
      style={globalModal}
      preventScroll={true}
      >
      <img src={x} onClick={handleToggle} style={{width: '1em', marginLeft: '39em', cursor: 'pointer'}} alt="x"/> 
      <ModalContainer>
        <div>Come desidera lo scontrino?</div>
        <GreenButtonModal onClick={() => handleNavigation()}>Proteggiamo l’ ambiente e mandate lo scontrino al mio telefonino</GreenButtonModal>
        <BlueButtonModal onClick={() => handleNavigation()}>Preferisco stampato, grazie!</BlueButtonModal>
      </ModalContainer>
    </Modal> 
  </>
  )
};

export default PricingListTotal;
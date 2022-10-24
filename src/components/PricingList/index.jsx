import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-modal'
import { nextStep } from '../../store/modules/step/actions'
import { creditCard, buonoFedelta, satispay, giftCard } from '../../store/modules/payment/actions'
import { Container, PricingListHeader, TableContainer, InnerContainer, InnerFirstSelection, InnerSecondSelection, MiniCard, MiniCardInfo, TotalBar, Button, PaymentMethod, ButtonModal } from './styles';
import { globalModal, ModalContainer } from '../../global/styles/index'
import ProductDetail from '../ProductDetail/index'
import AddRemoveBags from '../AddRemoveBags/index'
import EuroImage from '../../assets/icons/eurosign.png'
import Cart from '../../assets/icons/cart.png'
import Weight from '../../assets/icons/weight.png'
import Bags from '../../assets/icons/bags.png'
import x from '../../assets/icons/times.svg'
import Bancomat from '../../assets/icons/bancomat.png'
import BancoFedelta from '../../assets/icons/bancofedelta.png'
import CarteRegalo from '../../assets/icons/carteregalo.png'
import Satispay from '../../assets/icons/satispay.png'

const PricingList = () => {

  const products = ['logo printed shorts', 'sweat-shirt à fermeture éclair', 'Napolina Tagliatelle', 'Adina Latte', 'Coca Cola', 'logo printed crispy nylon swim shorts']
  const bags = useSelector((state) => state.bags);
  const [modal, showModal] = useState(false);

  const handleToggle = () => {
    showModal(!modal);
  };

  const dispatch = useDispatch();

  const handlePayment = (payment) => {
    dispatch(payment());
    dispatch(nextStep());
    handleToggle();
  };

  return (
  <Container>
    <TableContainer>
      <PricingListHeader>
        <span>Prodotto</span>
        <span>Prezzo</span>
      </PricingListHeader>
      {products.map((product, index) => <ProductDetail productName={product} key={index}/>)}
    </TableContainer>
    <InnerContainer>
      <InnerFirstSelection>
        <MiniCard><img src={Cart} alt="" /><MiniCardInfo><span>6</span></MiniCardInfo></MiniCard>
        <MiniCard><img src={Weight} alt="" /><MiniCardInfo><span>130kg</span></MiniCardInfo></MiniCard>
        <MiniCard><img src={Bags} alt="" /><MiniCardInfo><AddRemoveBags /></MiniCardInfo></MiniCard>
      </InnerFirstSelection>
      <InnerSecondSelection>
        <TotalBar><img src={EuroImage} alt=""/><div>130.50</div></TotalBar>
        <Button onClick={() => handleToggle()}>PAGARE</Button>
      </InnerSecondSelection>
    </InnerContainer>
      <Modal
        isOpen={modal}
        style={globalModal}
        preventScroll={true}
        >
        <img src={x} onClick={handleToggle} style={{width: '1em', marginLeft: '39em', cursor: 'pointer'}} alt="x"/> 
        <ModalContainer>
          <h3>Scegli il metodo di pagamento</h3>
          <PaymentMethod>
            <img src={Bancomat} alt="" onClick={() => handlePayment(creditCard)} />
            <img src={CarteRegalo} alt="" onClick={() => handlePayment(giftCard)} />
            <img src={BancoFedelta} alt="" onClick={() => handlePayment(buonoFedelta)} />
            <img src={Satispay} alt="" onClick={() => handlePayment(satispay)} />
          </PaymentMethod>
          <ButtonModal onClick={() => handleToggle()}>indietro</ButtonModal>
        </ModalContainer>
      </Modal> 
  </Container>);
};

export default PricingList;
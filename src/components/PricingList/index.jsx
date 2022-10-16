import { useSelector } from "react-redux";
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal'
import { Container, PricingListHeader, TableContainer, InnerContainer, InnerFirstSelection, InnerSecondSelection, MiniCard,TotalBar, Button, PaymentMethod, ButtonModal } from './styles';
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
  const navigate = useNavigate(); 

  const handleToggle = () => {
    showModal(!modal);
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
        <MiniCard><div>6</div><img src={Cart} alt="" /></MiniCard>
        <MiniCard><div>130kg</div><img src={Weight} alt="" /></MiniCard>
        <MiniCard><div>{bags}</div><img src={Bags} alt="" /></MiniCard>
        <AddRemoveBags />
      </InnerFirstSelection>
      <InnerSecondSelection>
        <TotalBar><span>Totale</span><img src={EuroImage} alt=""/><div>130.50</div></TotalBar>
        <Button onClick={() => handleToggle()}>Pagare</Button>
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
            <img src={Bancomat} alt="" />
            <img src={CarteRegalo} alt="" />
            <img src={BancoFedelta} alt="" />
            <img src={Satispay} alt="" />
          </PaymentMethod>
          <ButtonModal onClick={() => handleToggle()}>indietro</ButtonModal>
        </ModalContainer>
      </Modal> 
  </Container>);
};

export default PricingList;
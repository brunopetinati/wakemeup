import { useState } from 'react';
import ProductDetail from '../ProductDetail';
import { Container, Header, Button, GreenButtonModal, BlueButtonModal } from './styles';
import Cart from '../../assets/icons/white-cart.png';
import Modal from 'react-modal';
import { globalModal, ModalContainer } from '../../global/styles/index';
import x from '../../assets/icons/times.svg'


const PricingListTotal = () => {
  // TO DO: pensar em como importar a lista para esse componente. Provavelmente redux.
  // TO DO: resolver lista grande com scroll no css
  const products = ['logo printed shorts', 'sweat-shirt à fermeture éclair', 'Napolina Tagliatelle', 'Adina Latte', 'Coca Cola', 'logo printed crispy nylon swim shorts']
  const [modal, showModal] = useState(false);

  const handleToggle = () => {
    showModal(!modal);
  };

  return (
  <>
    <Container>
      <Header><img src={Cart} alt="" />6 articoli</Header>
      {products.map((product, index) => <ProductDetail productName={product} key={index}/>)}
      <Button onClick={() => handleToggle()}>€ 130.65</Button>
    </Container>
    <Modal
      isOpen={modal}
      style={globalModal}
      preventScroll={true}
      >
      <img src={x} onClick={handleToggle} style={{width: '1em', marginLeft: '39em', cursor: 'pointer'}} alt="x"/> 
      <ModalContainer>
        <div>Come desidera lo scontrino?</div>
        <GreenButtonModal onClick={() => handleToggle()}>Proteggiamo l’ ambiente e mandate lo scontrino al mio telefonino</GreenButtonModal>
        <BlueButtonModal>Preferisco stampato, grazie!</BlueButtonModal>
      </ModalContainer>
    </Modal> 
  </>
  )
};

export default PricingListTotal;